const messages = require("../models/db")
function index (req,res){
    res.render("index",{title: "Mini Messageboard",messages:messages})
}

module.exports = index