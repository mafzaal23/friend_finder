var friends = require('../data/friends');

function compare(newFriend) {
    var difference = [];

    for (var i = 0; i < friends.length; i++) {
        var val = 0
        
        for (var j = 0; j < newFriend.answers.length; j++) {
            val += Math.abs(parseInt(newFriend.answers[j]) - parseInt(friends[i].answers[j]));
        }
        difference.push(val);
        // console.log(val);
    }

    friends.push(newFriend);
     return friends[difference.indexOf(Math.min(...difference))];
}

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
        return res.json(friends);
    });


    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        console.log(newFriend);
        console.log('ok');
        res.send(compare(newFriend));
    });


};