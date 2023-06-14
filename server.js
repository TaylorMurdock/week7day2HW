const express = require("express");
const app = express();
const port = 3000;

// Configure the view engine
app.set("view engine", "ejs");

// Require the drinks data from the drinks.js file
const drinks = require("./models/drinks");

app.get("/", (req, res) => {
  res.send("Welcome to the Gitpub App!");
});

app.get("/drinks", (req, res) => {
  res.render("index", { drinks: drinks });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
