const express = require("express");
const app = express();

app.use(express.static(__dirname + "views/index.html"));

app.get("/", function (req, res) {
  res.redirect(__dirname + "views/index.html");
});
