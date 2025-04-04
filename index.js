const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/course", (req, res) => {
  res.send([1, 2, 4]);
});

app.listen(8080, () => console.log("listening on port 8080..."));
