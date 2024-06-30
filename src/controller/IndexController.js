const resHelper = require("../helper/ResponseHelper")

class IndexController {
  async index(req, res) {
    resHelper.sendResponse(req,res, 200, "API KITA SU MENYALA")
  }
}

module.exports = new IndexController();