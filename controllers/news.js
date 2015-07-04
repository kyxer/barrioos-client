angular.module('barrioos')
  .controller('NewsCtrl', function($scope, $rootScope, $window, $auth) {

  
    if (!$auth.isAuthenticated()) {
      	$location.path("/");
    }  

    
  });