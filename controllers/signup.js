angular.module('barrioos')
  .controller('SignupCtrl', function($scope, $window, $location, $rootScope, $auth, md5) {

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

          var dataAvatar = new Identicon(md5.createHash($rootScope.currentUser.id.toString()), 150).toString();
          var avatar = 'data:image/png;base64,'+dataAvatar;

          var dataThumb = new Identicon(md5.createHash($rootScope.currentUser.id.toString()), 80).toString();
          var thumb = 'data:image/png;base64,'+dataThumb;

          $window.localStorage.setItem('avatar_standar', avatar);
          $window.localStorage.setItem('avatar_thumbnail', thumb);
          $window.localStorage.setItem('isRegister',1);


          $location.path("/avatar");

        })
        .catch(function(response) {

        });

    };

  });