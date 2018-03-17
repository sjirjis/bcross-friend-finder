var friends = require("../data/friends");

module.exports = function (app) {
    
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    })

    app.post("/api/friends", function(req, res) {
        var userData = req.body;
        var userScores = userData.scores;
        console.log("userScores: ", userScores);
    })
    console.log("friendScores: ", friends.scores);
}
