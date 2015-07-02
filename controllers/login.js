angular.module('barrioos')
  .controller('LoginCtrl', function($scope, $window, $location, $rootScope, $auth) {

    if ($auth.isAuthenticated() && $rootScope.currentUser) {
      $location.path("/");
    }
    
    $scope.emailLogin = function() {

      var auth = {
        email: $scope.email, 
        password: $scope.password
      }

      $auth.login({ auth: auth  })
        .then(function(response) {
          $window.localStorage.currentUser = JSON.stringify(response.data.user);
          $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
        })
        .catch(function(response) {
          $scope.errorMessage = {};
          angular.forEach(response.data.message, function(message, field) {
            $scope.loginForm[field].$setValidity('server', false);
            $scope.errorMessage[field] = response.data.message[field];
          });
        });
    };

  });