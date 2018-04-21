var express = require("express");
var router = express.Router();
var friends = [];
router.get("/api/friends", function (req, res) {
    return res.json(friends);
});

router.post("/api/friends", function(req,res){
    var newSurvey = req.body;
    friends.push(newSurvey);
    res.json(newSurvey);
})

module.exports = router;