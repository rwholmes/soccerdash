angular.module('app.services.headlines', [])

.service('Headlines', ['$http', function($http) {
  
  this.getHeadlines = function() {
    var url = 'http://api.espn.com/v1/sports/soccer/eng.1/news/?limit=40&apikey=qw7zmfchttxkkkfw9anwa7q4&callback=JSON_CALLBACK';
    return $http.jsonp(url)
      .success(function(data){
      	console.log('get success');
      })
      .error(function(data) {
        console.log('Error getting headlines.');
      });
  };

}]);