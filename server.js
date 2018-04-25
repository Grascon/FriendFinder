//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Setting up Express
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "./app/public")));

//Using Body-Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes needed
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
app.use(express.static('public'));

//Starting server
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});