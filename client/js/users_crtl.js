myApp.controller('usersController', function($location, myAppFactory){
	var _this = this;
	myAppFactory.getUsers(function(data){
		_this.users = data;
		// console.log('from userCrtl', _this.users);
	})

	myAppFactory.getUserDetails(function(data){
		_this.user = data;
		// console.log('from userCrtl', _this.user);
	})


	this.errors = myAppFactory.getErrors();

	this.getUser = function(){
		if(myAppFactory.isUserNew(this.newUser.name) === true)
		{
			myAppFactory.addUser(this.newUser, function(user){
				myAppFactory.getUser(user, function(data){
					_this.user = data;
					// console.log('get new user in crtl', _this.user);
					$location.path('/dashboard');
					_this.newUser = {};
				});
			});
		}
		else
		{
			myAppFactory.getUser(this.newUser, function(data){
				_this.user = data;
				// console.log('get old user in crtl', _this.user);
				$location.path('/dashboard'); 
				_this.newUser = {};
			})
		}
	}


});