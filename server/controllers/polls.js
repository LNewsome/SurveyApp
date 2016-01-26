var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');

module.exports = (function(){
	return {
		show_all: function(req, res){
			Poll.find({}, function(err, results){
				if(err)
				{
					console.log(err);
				}
				else
				{
					res.json(results);
				}
			})
		},
		create: function(req, res){
			var poll = new Poll(req.body);
			poll.save(function(err){
				if(err)
				{
					console.log(err);
					res.json(err);
				}
				else
				{
					res.json(poll);
				}
			})
		},
		show: function(req, res){
			Poll.findOne({_id:req.body._id}, function(err, poll){
				if(err)
				{
					console.log(err);
				}
				else
				{
					res.json(poll);
				}
			})
		},
		remove: function(req, res){
			Poll.findOne(req.body, function(err, poll){
				if(err)
				{
					console.log(err);
				}
				else
				{
					Poll.remove(req.body, function(err, poll){
						if(err)
						{
							console.log(err)
						}
						else
						{
							res.json(poll);
						}
					})
				}
			})
		},
		update: function(req, res){
			Poll.update({_id: req.body._id}, {$set: {option1Votes: req.body.option1Votes,
											     	option2Votes: req.body.option2Votes,
											     	option3Votes: req.body.option3Votes,
											     	option4Votes: req.body.option4Votes}}, function(err, poll){
				if(err)
						{
							console.log(err)
						}
						else
						{
							res.json(poll);
						}
					}) 
		},

}
})();