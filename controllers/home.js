angular.module('barrioos')
  .controller('HomeCtrl', function($scope, $window, $rootScope, $auth, API) {

    console.log("holaaas");

    $scope.isRegister = $window.localStorage.isRegister;

    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };

    $scope.linkInstagram = function() {
      // connect email account with instagram
    };

    $scope.findBarrio = function(){

       	if(!$scope.searchForm.$valid){
       		console.log($scope.searchForm.postalCode.$error);
       		console.log($scope.searchForm.postalCode.$dirty);
    		return;
    	}

    	$rootScope.myPromise = API.getBarrioByPostalCode($scope.postalCode).then(function(data) {
            $rootScope.barrio = data;
            $rootScope.notFound = 0;
  		})
  		.catch(function(response){
  			$rootScope.notFound = 1;
  			$rootScope.barrio = {};
  			console.log(arguments);
  		});

    }

    $scope.closeAnnouncement = function(){
      $scope.isRegister = false;
      delete $window.localStorage.isRegister;
    }

  });