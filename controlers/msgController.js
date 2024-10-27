const message = require("../models/db")
function msgCont (req,res){
    const { name } = req.params
    const indexFind = message.findIndex((x)=> x.user == name)
    const messages = message[indexFind];
    res.render("message",{title: "Mini Messageboard",messages:messages})
}

module.exports = msgCont