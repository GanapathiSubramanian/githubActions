const express = require("express");
const app = express();

app.get("/test", (_req, res) =>  {
  res.status(201).send("Hello world")
})
module.exports = app;