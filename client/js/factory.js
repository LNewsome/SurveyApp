myApp.factory('myAppFactory', function($http){
	var factory = {};
	var users = [];
	factory.user = {};
	var polls = [];
	var poll = {};
	var errors = [];
	var date = Date.now();
	var angularErrors = [];



	factory.getUsers = function(callback){
		$http.get('/users').success(function(output){
			users = output;
			callback(users);
		})
	}

	factory.getUser = function(info, callback){
		$http.post('/user', info).success(function(output){
			factory.user = output;
			callback(factory.user);
		})
	}
	
	factory.getUserDetails = function(callback){
		callback(factory.user);
	}

	factory.addUser = function(info, callback){
		debugger;
		$http.post('/newUser', info).success(function(output){
			users.push({
				name: info.name,
				created_at: Date.now()
			});
			factory.user = output;
			callback(factory.user);
		})
	}
	factory.isUserNew = function(newUserName){
		for (var i = 0; i < users.length; i++) {
			if(users[i].name == newUserName){
				return false;
			}
		}
		return true;
	}

//add additional methods & validations

	factory.pollValidation = function(info, name, callback){
		info.name = name;
		angularErrors = [];
	//Question
		if(info.question == null){
			angularErrors.push('Question is required')
		}
		else {
			if(info.question.length < 8){
				angularErrors.push('Question must be at least 8 characters')
			}
		}
	//Options
		if(info.option1 == null){
			angularErrors.push('Option 1 is required')
		}
		else {
			if(info.option1.length < 3){
				angularErrors.push('Option 1 must be at least 3 characters')
			}
		}

		if(info.option2 == null){
			angularErrors.push('Option 2 is required')
		}
		else {
			if(info.option2.length < 3){
				angularErrors.push('Option 2 must be at least 3 characters')
			}
		}

		if(info.option3 == null){
			angularErrors.push('Option 3 is required')
		}
		else {
			if(info.option3.length < 3){
				angularErrors.push('Option 3 must be at least 3 characters')
			}
		}

		if(info.option4 == null){
			angularErrors.push('Option 4 is required')
		}
		else {
			if(info.option4.length < 3){
				angularErrors.push('Option 4 must be at least 3 characters')
			}
		}
		callback(angularErrors);
	}

//add poll
	factory.addPoll = function(info, callback){
		errors = [];
		// debugger;
		$http.post('/newPoll', info).success(function(output){
			if(output.errors){
				errors.push(output.errors);
				console.log(errors);
			}
			else
			{
				polls.push({
					name: info.name,
					question: info.question,
					option1: info.option1,
					option2: info.option2,
					option3: info.option3,
					option4: info.option4,
					created_at: Date.now()
				});
			}
			callback(polls);
		})
	}

	factory.getPolls = function(callback){
		$http.get('/polls').success(function(output){
			polls = output;
			callback(polls);
		})
	}

	factory.getPoll = function(info, callback){
		$http.post('/poll', info).success(function(output){
			poll = output;
			callback(poll);
		})
	}
	factory.removePoll = function(poll){
		$http.post('/remove', poll).success(function(output){
			for (var i = 0; i < polls.length; i++) {
				if(polls[i] == poll){
					polls.splice(i, 1);
				}
			};
		})
	}

	factory.addVote = function(info, callback){
		$http.post('/vote', info).success(function(output){
			callback(polls);
		})
	}

//return errors

	factory.getErrors = function(){
		return errors;
	}

	factory.getAngularErrors = function(){
		return angularErrors;
	}

	return factory;
})