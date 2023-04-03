const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ sa: "ws" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
