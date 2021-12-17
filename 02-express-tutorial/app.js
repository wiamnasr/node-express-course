const express = require("express");
const req = require("express/lib/request");

const app = express();

const logger = require("./logger");

// referencing my middleware function =>  app.use will invoke my logger for anything after it (order matters, remember!)
// can provide a path that will apply to anything that comes after the path that we provide (here /api)
// If we omit the path, it will be applied to all our requests
app.use("/api", logger);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
