const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    hello: "world",
    lagi: "lagilagi",
    test:"test",
    baru:"lagi"
  });
});

app.listen(3000, () => {
  console.log("app nya jalan");
});
