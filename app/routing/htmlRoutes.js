var express = require("express");
var router = express.Router();

//html routes
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
//////survey
router.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

module.exports = router;