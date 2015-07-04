angular.module('barrioos')
  .controller('NavbarCtrl', function($scope, $rootScope, $window, $auth) {

  	$scope.thumb = $window.localStorage.avatar_thumbnail;

    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };

    $scope.logout = function() {
      $auth.logout();
      delete $window.localStorage.currentUser;
      delete $window.localStorage.avatar_thumbnail;
      delete $window.localStorage.avatar_standar;
      delete $window.localStorage.isRegister;

    };

  });