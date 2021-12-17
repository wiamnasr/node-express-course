const express = require("express");
const app = express();

let { people } = require("./data");

// static assets (we have a working app in this path)
app.use(express.static("./methods-public"));

// parse form data middleware
app.use(express.urlencoded({ extended: false }));

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// Inserting data with a post method
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please provide Credentials...");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
