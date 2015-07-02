angular.module('barrioos')
  .controller('SignupCtrl', function($scope, $auth) {

    $scope.signup = function() {
      var user = {
        name: $scope.name,
        email: $scope.email,
        password: $scope.password,
        postalCode: $scope.postalCode
      };

      // Satellizer
      $auth.signup(user)
        .catch(function(response) {
          console.log(arguments);
          console.log(response.data);
        });
    };

  });