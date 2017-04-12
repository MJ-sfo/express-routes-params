//  REQUIREMENTS
var express = require('express');
var app = express();

// DATA (temporary until we know how to use databases)
var burgers = [
  'Hamburger',
  'Cheese Burger',
  'Vegetable Burger'
];

var tacos = [
  'Soft Taco',
  'Crunchy Taco',
  'Super Taco'
];

//  MIDDLEWARE
// serve assets from the public folder...
// ... as if they were inside the / directory
app.use(express.static('public'));

//  ROUTES
app.get("/", function(rec, res) {
  res.send("Hello from Michael");
});

app.get("/api/burgers", function(rec, res) {
  res.json(burgers);
});

app.get("/api/tacos", function(rec, res) {
  res.json(tacos);
});

//  SERVER START
app.listen(3000, function () {
  console.log("HTTP server listening at localhost:3000");
});
