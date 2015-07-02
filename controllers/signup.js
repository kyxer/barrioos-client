angular.module('barrioos')
  .controller('SignupCtrl', function($scope, $window, $location, $rootScope, $auth) {

    if ($auth.isAuthenticated() && $rootScope.currentUser) {
      $location.path("/");
    }

    $scope.signup = function() {
      var user = {
        name: $scope.name,
        email: $scope.email,
        password: $scope.password,
        postalCode: $scope.postalCode
      };


      // Satellizer
      $auth.signup({user:user})
        .then(function(response) {
          $window.localStorage.currentUser = JSON.stringify(response.data.user);
          $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
        })
        .catch(function(response) {

        });
    };

  });