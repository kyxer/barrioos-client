angular.module('barrioos')
  .controller('AvatarCtrl', function($scope, $rootScope, $location, $window, $auth, md5, Upload) {

  	if (!$auth.isAuthenticated()) {
      	$location.path("/");
    }   
    
    $scope.thumb = $window.localStorage.avatar_standar;
    
    $scope.myImage='';
    $scope.myCroppedImage='';
    $scope.firstTime = 1;
    $scope.progressPercentage = 0;



    var handleFileSelect=function(evt) {
        $scope.firstTime = 0;
        //checked
        angular.element(document.querySelector('#btUpload'))[0].disabled = false;

    	var file=evt.currentTarget.files[0];
    	var reader = new FileReader();
    	reader.onload = function (evt) {
        	$scope.$apply(
                function($scope){
        	$scope.myImage=evt.target.result;
        });
      };
      reader.readAsDataURL(file);
    };

    angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);


    $scope.upload = function () {
	   
        $scope.myPromise = Upload.upload({
            url: 'http://api.barrioosger.com/users/'+$rootScope.currentUser.id+'/avatar',
            fields: { image: $scope.myCroppedImage},
            sendFieldsAs: 'json-blob'
        }).progress(function (evt) {
            $scope.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + $scope.progressPercentage + '% ');
        }).success(function (data, status, headers, config) {

            

            $window.localStorage.setItem('avatar_standar', data.avatars.avatar_standar);
            $window.localStorage.setItem('avatar_thumbnail', data.avatars.avatar_thumbnail);

            $location.path("/");

        }).catch(function(response) {
	        console.log(arguments);
	    });

    };

    $scope.checked = function () {

        console.log($scope.firstTime);
        return $scope.firstTime;

    }

  });