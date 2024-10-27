const express = require("express");
const router = express.Router()
const msgCont = require("../controlers/msgController");

router.get("/message/:name",msgCont)

module.exports = router;