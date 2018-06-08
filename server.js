"use strict";
const express = require("express");
const app = express();
const shopRoutes = require("./routes.js");

app.use(express.static(__dirname + "/public"));
app.use("/", shopRoutes);

    

let port = 9001;
const server = app.listen(port, () => {
    console.log("Server is up and running. Port Num: " + port);
});