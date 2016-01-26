myApp.controller('pollsController', function($location, myAppFactory){
	var _this = this;

	this.getPolls = function(){
		myAppFactory.getPolls(function(data){
			_this.polls = data;
		})

	}

	this.addPoll = function(name){
			$('#error').addClass('hide');
			myAppFactory.pollValidation(this.newPoll, name, function(angularErrors){
				if(angularErrors.length == 0)
				{
					myAppFactory.addPoll(_this.newPoll, function(polls){
						_this.errors = myAppFactory.getErrors();
						if(_this.errors.length == 0)
						{
							_this.polls = polls;
							$location.path('/dashboard');
							_this.newPoll = {};
						}
						else
						{
							$('#error').removeClass('hide');
							_this.newPoll = {};
						}
					});
				}
				else
				{
					$('#error').removeClass('hide');
					_this.newPoll = {};
					_this.angularErrors = angularErrors;
				}

			})
		}

	this.removePoll = function(poll){
		myAppFactory.removePoll(poll);
		}

	this.getPoll = function(poll){
		myAppFactory.getPoll(poll, function(poll){
			_this.poll = poll;
		});
	}

	this.addVoteOption1 = function(poll){
		console.log(poll.option1Votes);
		poll.option1Votes = poll.option1Votes + 1; 
		console.log(poll.option1Votes);
		myAppFactory.addVote(poll, function(polls){
			_this.polls = polls;
			$location.path('/dashboard');
		});
	}

	this.addVoteOption2 = function(poll){
		poll.option2Votes = poll.option2Votes + 1; 
		myAppFactory.addVote(poll, function(polls){
			_this.polls = polls;
			$location.path('/dashboard');
		});
	}

		this.addVoteOption3 = function(poll){
		poll.option3Votes = poll.option3Votes + 1; 
		myAppFactory.addVote(poll, function(polls){
			_this.polls = polls;
			$location.path('/dashboard');
		});
	}

		this.addVoteOption4 = function(poll){
		poll.option4Votes = poll.option4Votes + 1; 
		myAppFactory.addVote(poll, function(polls){
			_this.polls = polls;
			$location.path('/dashboard');
		});
	}



});