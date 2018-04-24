var path = require("path");
var friends = require("../data/friends.js");

//Api routes
module.exports = function(app){
    //all friends (JSON)
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req,res){
        //information obtained from survey
        var newFriend = req.body;
        var newScores = newFriend.scores;
        
        //variables that will be used to store match information
        var friendName = "";
        var friendPhoto = "";
        
        //initial difference
        var totalDifference = 50;

        //looping to go through all existing friends score
        for (var i = 0; i < friends.length; i++){

            //setting difference to zero
            var difference = 0;

            //using loop to find differences for the questions
            for (var a = 0; a < newScores.length; a++){
            difference += Math.abs(friends[i].scores[a] - newScores[a]);
            }
            //determining match by finding lowest difference and saving that friends name and photo
            if (difference < totalDifference){
                totalDifference = difference;
                friendName = friends[i].name;
                friendPhoto = friends[i].photo;
            }
        }
        //sending newFriend data
        friends.push(newFriend);
        //sending our match data
        res.json({friendName: friendName, friendPhoto: friendPhoto});
    });
}



