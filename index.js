const express = require("express");
const app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/views/index.html"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/:hi", function (req, res) {
  res.redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
});

app.listen(3005);
