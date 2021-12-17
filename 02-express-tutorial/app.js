const express = require("express");
const app = express();

// importing the router
const people = require("./routes/people");

const auth = require("./routes/auth");

// static assets (we have a working app in this path)
app.use(express.static("./methods-public"));

// parse form data middleware
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());

// routes
app.use("/api/people", people);

app.use("/login", auth);

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
