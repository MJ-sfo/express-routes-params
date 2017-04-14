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

app.get("/api/multiply", function (req, res) {
  console.log("trying to multiply");
  var x = req.query.x;
  var y = req.query.y;
  res.send(x*y + " is the result");
});

// if url is http://localhost:3000/api/tacos/Soft%20Taco or http://localhost:3000/api/tacos/1, response is "Sorry,
// that'snotatacooption"
app.get('/api/tacos/:id', function (req, res) {
  var taco = req.params.id;
  console.log(taco);
  var selection = tacos[taco] || "Sorry, that's not a taco option";
  // res.send('You get a ' + tacos[kindOf] + '!');
  res.json(selection);
});

//  SERVER START
app.listen(3000, function () {
  console.log("HTTP server listening at localhost:3000");
});
