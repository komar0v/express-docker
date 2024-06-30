const resHelper = require("../helper/ResponseHelper")

class TimeController {
  async getServerTime(req, res) {

    //code to get current server time
    const current_server_time = new Date();
    resHelper.sendResponse(req,res, 200, current_server_time)
  }
}

module.exports = new TimeController();