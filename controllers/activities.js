angular.module('barrioos')
  .controller('ActivitiesCtrl', function($scope, $rootScope, $window, $auth) {

  
    if (!$auth.isAuthenticated()) {
      	$location.path("/");
    }  

    
  });