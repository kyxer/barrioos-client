angular.module('barrioos', ['ngRoute', 'ngMessages', 'satellizer'])
  .config(function($routeProvider, $authProvider) {

  	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'HomeCtrl'
	})
	.when('/iniciar-sesion', {
		templateUrl: 'views/login.html',
		controller: 'LoginCtrl'
	})
	.when('/registrarse', {
		templateUrl: 'views/signup.html',
		controller: 'SignupCtrl'
	})
	.otherwise('/');

	$authProvider.baseUrl = 'http://api.barrioos.com/' 
	$authProvider.loginUrl = '/auth/login';
	$authProvider.signupUrl = '/user';
	//$authProvider.withCredentials = false;

	/*$authProvider.oauth2({
	  name: 'instagram',
	  url: 'http://localhost:3000/auth/instagram',
	  redirectUri: 'http://localhost:8000',
	  clientId: '799d1f8ea0e44ac8b70e7f18fcacedd1',
	  requiredUrlParams: ['scope'],
	  scope: ['likes'],
	  scopeDelimiter: '+',
	  authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
	});*/

  });