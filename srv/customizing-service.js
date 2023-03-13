const cds = require("@sap/cds");
const { executeHttpRequest } = require("@sap-cloud-sdk/http-client");
const { edmx2csn } = require("@sap/cds-dk/lib/import/odata");
const LOG = cds.log("dynamic");

class CustomizingService extends cds.ApplicationService {
  async init() {
    const db = await cds.connect.to("db");
    const { Service } = db.entities("customizing");

    this.on("loadServices", async (req) => {
      const services = await db.read(Service).where({ active: true });
      for (let i = 0; i < services.length; i++) {
        const service = services[i];
        const metadataResponse = await executeHttpRequest(
          { destinationName: service.destination },
          { url: `${service.path}$metadata` }
        );
        const metadata = metadataResponse.data;
        // REVISIT: Can we also get CDS back?
        const csn = await edmx2csn(metadata, service.name, {});
        LOG.debug(csn);
        const serviceConnection = await cds.connect.to(service.name, {
          kind: "odata",
          model: csn,
          credentials: { destination: service.destination, path: service.path },
        });
        // TODO: Reflect Service and iterate through Entities reading the first entry

        // TODO: Run only for CatalogService
        // if() {}
        // Read existing Orders
        const orders = await serviceConnection.get("Orders");
        LOG.info(`Found ${orders.length} orders`);
        // Create a new Order
        const order = await serviceConnection.post("Orders", {
          OrderNo: "42",
          CustomerOrderNo: "Order from bob",
          currency_code: "EUR",
          salesOrganization: "",
          Items: [],
          ShippingAddress: {
            street: "Hauptstraße 1",
            city: "Trostberg",
          },
        });
        LOG.info(order);
        const orders2 = await serviceConnection.get("Orders");
        LOG.info(`Found ${orders2.length} orders`);
      }
      return services;
    });

    return super.init();
  }
}

module.exports = { CustomizingService };
