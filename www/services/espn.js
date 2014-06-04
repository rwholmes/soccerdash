angular.module('app.services.espn', [])

.service('Espn', ['$http', function($http) {
	
	var leagues = {
		premier: '/eng.1'
	};

	var dataType = {
		teams: '/teams',
		headlines: '/news'
	}

	var baseUrl = 'http://api.espn.com/v1/sports/soccer';
	var apikey = 'qw7zmfchttxkkkfw9anwa7q4';

	var data = {
	  _accept: 'application/json',
	  limit: 0,
	  offset: 5
	};

	var cb = '&callback=JSON_CALLBACK';

	this.get = function(league, type) {
		console.log('calling Espn get');
		var url = baseUrl + leagues[league] + dataType[type] + '/?apikey=' + apikey + cb;

		return $http.jsonp(url)
    .success(function(data){
      console.log('get teams success');
    })
    .error(function(data) {
      console.log('Error getting teams.');
    });
	}

}]);