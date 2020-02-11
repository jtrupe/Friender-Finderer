let friends = require('../data/friends');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        // console.log(friends);
        // console.log(req.body);
        res.json(friends);
    });

    app.post("/api/friends", function(req,res){

        let bestMatch = {
            name: "",
            photo: "",
            friendDifference: 50
        }

        let userData = req.body ;
        console.log(userData);
        let userScores = userData.scores;
        console.log(userScores);
        let totalScore;

        for (let i = 0; i < friends.length; i++) {
            let friend = friends[i];
            totalScore = 0
            console.log(friend);
            for (let j = 0; j < friend.scores.length; j++) {
                let friendScore = friend.scores[j];
                let userScore = userScores[j];
                
                totalScore += Math.abs(parseInt(friendScore)-parseInt(userScore));
            }
            if (totalScore < bestMatch.friendDifference){
                bestMatch.name = friend.name;
                bestMatch.photo = friend.photo;
                bestMatch.friendDifference = totalScore;
            }
        }
        console.log(bestMatch.name);
        friends.push(userData);
        res.json(bestMatch);
    })
}