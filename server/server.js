const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/fit-progress", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const routes = require("./src/api");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(3000, () => {
  console.log("Server running on port 3000...");
});
