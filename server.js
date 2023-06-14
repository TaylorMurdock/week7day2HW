// import dependencies
const express = require("express");
const app = express();
const port = 3000;
const drinks = require("./models/drinks");

// LISTENER
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to the Gitpub App!");
});
app.get("/drinks", (req, res) => {
  res.send(drinks);
});
