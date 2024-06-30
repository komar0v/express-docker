const router = require("express").Router()

const IndexCtrlr = require('../controller/IndexController')
const TimeCtrlr = require('../controller/TimeController')

router.get("/", IndexCtrlr.index)

router.get("/time", TimeCtrlr.getServerTime)

module.exports = router