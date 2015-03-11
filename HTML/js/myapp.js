var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

// ROUTES 

myApp.config( function($routeProvider) {
	$routeProvider
		.when('/startseite', {
			templateUrl: 'pages/startseite.html'

		})
		.when('/rechtliches', {
			templateUrl: 'test.html'
		})
		.when('/login', {
			templateUrl: 'pages/login.html'
		})
		.when('/registration', {
			templateUrl: 'pages/registration.html'
		})
		.when('/praxis', {
			templateUrl: 'pages/praxis.html',
			controller: 'praxisController'
		})
		.when('/searchresults', {
			templateUrl: 'pages/searchresults.html'
		})
		.when('/praxissuche', {
			templateUrl: 'pages/praxissuche.html'
		})
		.when('/zahnarztsuche', {
			templateUrl: 'pages/zahnarztsuche.html'
		})
		.otherwise( { redirectTo: '/startseite' })
});



myApp.directive("searchResults", function(){

});

myApp.controller('praxisController', [ '$scope', function($scope){
	$scope.custom = false;
}]);

myApp.directive('mitarbeiter', function(){
	return {
		template: ''
	}

});