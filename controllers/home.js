angular.module('barrioos')
  .controller('HomeCtrl', function($scope, $window, $rootScope, $auth) {

    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };

    $scope.linkInstagram = function() {
      // connect email account with instagram
    };

  });