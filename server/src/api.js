const express = require("express");
const app = express();

const ingredientRoute = require("./ingredient/route");

app.use("/ingredients", ingredientRoute);

module.exports = app;
