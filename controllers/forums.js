angular.module('barrioos')
  .controller('ForumsCtrl', function($scope, $rootScope, $window, $auth) {

	if (!$auth.isAuthenticated()) {
		$location.path("/");
  	}  
    

    
  });