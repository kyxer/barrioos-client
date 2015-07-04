angular.module('barrioos')
  .controller('LoginCtrl', function($scope, $window, $location, $rootScope, $auth, md5) {

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

          if(!$rootScope.currentUser.avatar_standar){
            var dataAvatar = new Identicon(md5.createHash($rootScope.currentUser.id.toString()), 150).toString();
            var avatar = 'data:image/png;base64,'+dataAvatar;

            var dataThumb = new Identicon(md5.createHash($rootScope.currentUser.id.toString()), 80).toString();
            var thumb = 'data:image/png;base64,'+dataThumb;

            $window.localStorage.setItem('avatar_standar', avatar);
            $window.localStorage.setItem('avatar_thumbnail', thumb);
          }

          


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