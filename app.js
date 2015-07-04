angular.module('barrioos', ['ngRoute', 'ngMessages', 'ngFileUpload', 'ngImgCrop', 'angular-md5', 'cgBusy', 'satellizer'])
  .config( function($routeProvider, $authProvider) {

  	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'HomeCtrl'
	})
	.when('/iniciar-sesion', {
		templateUrl: 'views/login.html',
		controller: 'LoginCtrl'
	})
	.when('/avatar', {
		templateUrl: 'views/avatar.html',
		controller: 'AvatarCtrl'
	})
	.when('/registrarse', {
		templateUrl: 'views/signup.html',
		controller: 'SignupCtrl'
	})
	.when('/perfil', {
		templateUrl: 'views/profile.html',
		controller: 'ProfileCtrl'
	})
	.when('/actividades/:postalCode', {
		templateUrl: 'views/activities.html',
		controller: 'ActivitiesCtrl'
	})
	.when('/foros/:postalCode', {
		templateUrl: 'views/forums.html',
		controller: 'ForumsCtrl'
	})
	.when('/noticias/:postalCode', {
		templateUrl: 'views/news.html',
		controller: 'NewsCtrl'
	})
	.otherwise('/');

	$authProvider.baseUrl = 'http://api.barrioosger.com/' 
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

  }).run(function($rootScope, $window, $auth) {
	  if ($auth.isAuthenticated()) {
	  	$rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
	  }
});