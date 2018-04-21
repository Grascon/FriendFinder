//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

var apisRoute = require("./app/routing/apiRoutes");
var myHtmlRoutes = require("./app/routing/apiRoutes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//var friends = [];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});
//////survey
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.use("/", myHtmlRoutes);
app.use("/api/friends",apisRoute);

//starting server to listen
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});

/*

add array of each new survey, then run loop though data with new user and find difference
smallest difference is the match
diffence in arrays
var a = [1, 4, 3, 2];
var b = [0, 2, 1, 2];

var x = a.map(function(item, index) {
  // In this case item correspond to currentValue of array a, 
  // using index to get value from array b
  return item - b[index];
})
console.log(x);

adding arrays
var sum = x.reduce(function(x, b) { return x + b; }, 0);
console.log(sum);

*/
