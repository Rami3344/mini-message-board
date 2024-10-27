const express = require("express");
const app = express();
const path = require("node:path");
const indexRouter = require("./routes/index")
const newRouter = require("./routes/new");
const msgRouter = require("./routes/message");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/",indexRouter);
app.use("/",newRouter);
app.use("/",msgRouter)

app.listen(3000)