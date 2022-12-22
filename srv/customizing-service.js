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
        const csn = await edmx2csn(metadata, service.name, {});
        LOG.info(csn);
        // cds.connect.to(service.destination);
      }
      return services;
    });

    return super.init();
  }
}

module.exports = { CustomizingService };
