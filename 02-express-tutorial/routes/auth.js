const express = require("express");

const router = express.Router();

// Inserting data with a post method
router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please provide Credentials...");
});

module.exports = router;
