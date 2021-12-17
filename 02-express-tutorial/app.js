const express = require("express");
const app = express();

// dependency, third party middleware! <3
const morgan = require("morgan");

// Middlewares
const logger = require("./logger");
const authorize = require("./authorize");

// referencing my middleware function =>  app.use will invoke my logger for anything after it (order matters, remember!)
// can provide a path that will apply to anything that comes after the path that we provide (here /api for example can be passed as a first argument to the app.use function)
// If we omit the path, it will be applied to all our requests
// app.use can be added to specific routes directly

// req => middleware => response
// app.use([logger, authorize]);
// api/home/about/products

// static middleware
// app.use(express.static("./public"));

// using morgan for all routes, 'tiny' provides most essential data only (method, route, status, how long it took for the server to respond in ms)
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", [logger, authorize], (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
