app.factory('teams', ['$http', function($http) {
  
  var getTeams = function() {
    var url = 'http://api.espn.com/v1/sports/soccer/eng.1/teams/?apikey=qw7zmfchttxkkkfw9anwa7q4&callback=JSON_CALLBACK';
    var data = {
        // enter your developer api key here
        apikey: 'qw7zmfchttxkkkfw9anwa7q4',
        // the type of data you're expecting back from the api
        _accept: 'application/json',
        // number of results to be shown
        limit: newsLimit,
        offset: newsOffset
      };
    return $http.jsonp(url)
      .success(function(data){})
      .error(function(data) {
        console.log('Error getting teams.');
      });
  };
  
  return {
    getTeams: getTeams
  };

}]);