var users = require('./../controllers/users.js');
var polls = require('./../controllers/polls.js');


module.exports = function(app){
//user routes
	app.post('/newUser', function(req, res){
		users.create(req, res);
	})

	app.get('/users', function(req, res){
		users.show_all(req, res);
	})

	app.post('/user', function(req, res){
		users.show(req, res);
	})

//poll routes
	app.post('/newPoll', function(req, res){
		polls.create(req, res);
	})

	app.get('/polls', function(req, res){
		polls.show_all(req, res);
	})

	app.post('/poll', function(req, res){
		console.log(req.body);
		polls.show(req, res);
	})

	app.post('/remove', function(req, res){
		polls.remove(req, res);
	})

	app.post('/vote', function(req, res){
		// console.log("from routes", req.body);
		polls.update(req, res);
	})
}