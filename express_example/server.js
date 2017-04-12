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

app.get("/greetings/:name", function (req, res)  {
  res.send("Hi, " + req.params.name);
});

app.get("/pick-a-color/:color", function (req, res) {
  res.send("You chose teh color: "  + req.params.color);
});

// app.get("/thank", function (req, res) {
//   console.log(req.query);
//   var name = req.query.name;
//   res.send('Thank you, ' + name + "!");
// });

app.get("/thank", function (request, response) {
  console.log(request.query);
  var name = request.query.name;
  response.send('Thank you, ' + name + '!');
});

app.get("/multiply", function (req, res) {
  var x = req.query.x;
  var y = req.query.y;
  res.send(x*y + " is the result");
});

//  SERVER START
app.listen(3000, function () {
  console.log("HTTP server listening at localhost:3000");
});
