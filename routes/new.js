const express = require("express");
const router = express.Router()
const newCont = require("../controlers/newController");

router.get("/new",(req,res)=>{
    res.render("form")
})
router.post("/new",newCont);

module.exports = router;