const index = require("../controlers/indexController");
const express = require("express")
const router = express.Router()
router.get("/",index);

module.exports = router;
