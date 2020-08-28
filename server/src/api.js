const express = require("express");
const app = express();

const userRoute = require("./user/route");
const ingredientRoute = require("./ingredient/route");

app.use("/ingredients", ingredientRoute);
app.use("/users", userRoute);

module.exports = app;
