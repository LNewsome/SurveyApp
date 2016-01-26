var myApp = angular.module('myApp', ['ngRoute']);

	myApp.config(function($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: 'partials/login.html'
		})
		.when('/dashboard', {
			templateUrl: 'partials/dashboard.html'
		})
		.when('/create', {
			templateUrl: 'partials/newPoll.html'
		})
		.when('/poll/:question', {
			templateUrl: 'partials/votePoll.html'
		})
		.otherwise({
			redirectTo: '/'
		});
	})