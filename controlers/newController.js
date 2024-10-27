const { text } = require("express");
const messages = require("../models/db")
function newCont(req,res){
    const author = req.body.author
    const msg = req.body.message
    messages.push({text:msg,user:author,added:new Date()})
    res.redirect("/")
}

module.exports = newCont