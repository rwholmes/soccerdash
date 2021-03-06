angular.module('app.services.espn', [])

.service('Espn', ['$http', function($http) {
	
	var leagues = {
		premier: 'eng.1',
		spanish: 'esp.1',
		italian: 'ita.1',
		french: 'fra.1',
		german: 'ger.1',
		mls: 'usa.1'
	};

	var dataType = {
		teams: 'teams',
		headlines: 'news'
	}

	var baseUrl = 'http://api.espn.com/v1/sports/soccer';
	var apikey = process.env.APIKEY;

	var parameters = {
		// enter your developer api key here
		apikey: apikey,
		// the type of data you're expecting back from the api
		_accept: "application/json"
	};

	this.get = function(league, type, teamId) {
		var url = baseUrl + '/' + leagues[league] + '/' + dataType[type];
		if (teamId) {
			parameters.teams = teamId;
		}

		return $http({
	    url: url, 
	    method: "GET",
	    params: parameters
		})
		.success(function(data){
		  console.log('ESPN get success');
		})
		.error(function(data) {
		  console.log('ESPN get error');
		});

	}

}]);