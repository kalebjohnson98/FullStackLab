const express = require("express");
const shopRoutes = express.Router();
const items = require("./items.js");


shopRoutes.get("/items", (req, res) => {
    res.json(items);
});

shopRoutes.post("/items", (req, res) => {
    res.send();
});

shopRoutes.delete("/items/:id", (req, res) => {
    console.log(req.params.id);
});

shopRoutes.put("/items/:id", (req, res) => {
    console.log(req.params.id);
});

module.exports = shopRoutes;