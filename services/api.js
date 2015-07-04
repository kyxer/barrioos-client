angular.module('barrioos')
  .factory('API', function($http) {

    var baseUrl = 'http://api.barrioosger.com/';

    return {
      getBarrioByPostalCode: function(postalCode) {
        return $http.get(baseUrl + 'barrios/' + postalCode)
        .then(function(response) {
            console.log("en el factory");
            console.log(response); //I get the correct items, all seems ok here
            return response.data.barrio;
        });
      }
    }

  });