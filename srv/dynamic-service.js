const cds = require("@sap/cds");
const LOG = cds.log("dynamic");

class DynamicService extends cds.ApplicationService {
  init() {
    this.on("READ", "Services", (req) => {});

    return super.init();
  }
}

module.exports = { DynamicService };
