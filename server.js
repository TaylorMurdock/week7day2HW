const express = require("express");
const app = express();
const port = 3000;

// Configure the view engine
app.set("view engine", "ejs");

// Require the drinks data from the drinks.js file
let drinks = require("./models/drinks");

// Capitalize the first letter of each drink name
drinks = drinks.map((drink) => {
  return {
    ...drink,
    name: capitalizeFirstLetter(drink.name),
  };
});

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

app.get("/", (req, res) => {
  res.send("Welcome to the Gitpub App!");
});

app.get("/drinks", (req, res) => {
  res.render("index", { drinks: drinks });
});

app.get("/drinks/:id", (req, res) => {
  const drinkId = req.params.id;
  const drink = drinks.find(
    (drink) => drink.name.toLowerCase() === drinkId.toLowerCase()
  );

  app.get("/drinks/:id", (req, res) => {
    const drink = drinks[req.params.id];
    res.render("show", { drink });
  });

  if (drink) {
    res.render("show", { drink: drink });
  } else {
    res.send("Drink not found");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
