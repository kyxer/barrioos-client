angular.module('barrioos')
  .controller('ProfileCtrl', function($scope, $rootScope, $location, $window, $auth, md5, Upload) {

  	if (!$auth.isAuthenticated()) {
      	$location.path("/");
    }   

    $scope.name = $scope.currentUser.name;
    $scope.email = $scope.currentUser.email;
    $scope.postalCode = $scope.currentUser.postalCode;

    

  });