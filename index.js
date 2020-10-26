const express = require("express");
const app = express();

app.use(express.static(__dirname + "/views/index.html"));

app.get("/", function (req, res) {
  res.render(
    '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>URL Shortener</title><script>function submit() {alert("Done (slug availible)! Share your URL now!");}</script></head><body><label>URL: </label><input type="text" /><br /><label>Slug: </label><input type="text" /><br /><input type="button" value="Submit" onclick="submit()" /></body></html>'
  );
});

app.get("/:hi", function (req, res) {
  res.redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
});

app.listen(3005);
