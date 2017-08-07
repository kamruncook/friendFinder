var friendInfo 		= require('../data/friends.js');
var path 			= require('path');

var totalDifference = 0;

module.exports = function(app){
	app.get('/api/friends', function(req, res){res.json(friends);});

	app.post('/api/friends', function(req, res){

		var greatMatch = {
			name: "",
			image: "",
			matchDifference: 1000
		};
		var userData 	= req.body;
		var userName 	= userData.name;
		var userScore 	= userData.scores;

		var totalDifference = 0;

		for(var i = 0; i < [friendInfo].length-1; i++){
		console.log(friendInfo[i].name);
		totalDifference = 0;

		for(var j = 0; j < 10; j++){

		totalDifference += Math.abs(parseInt(userScore[j]) - parseInt(friendInfo[i].scores[j]));

		if (totalDifference <= connect.friendDifference){
			connect = friendInfo[i].name;
				connect.matchDifference = totalDifference;
	}
		}
}

		friendData.push(userData);
 
		res.json(greatMatch);
	});
};
