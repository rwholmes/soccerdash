angular.module('app.teams', [])

.controller('TeamsCtrl', ['$scope', 'Teams', 'Headlines', function($scope, Teams, Headlines) {
	var userHeadline = {};
  
  Teams.getTeams().then(function(data) {
  	$scope.teams = data.data.sports[0].leagues[0].teams;
  });

  $scope.userTeams = Teams.getUserTeams();
  $scope.userHeadlines = [];

  $scope.addTeam = function(team) {
  	
  	if (Teams.isTeam(team)) {
  		return;
  	}
  	
  	Teams.addUserTeam(team);
  	
  	Headlines.getHeadlines(team.id).then(function(data) {
  	  var headlines = data.data.headlines;

  	  for (var i=0; i<headlines.length; i++) {
  	  	var headline = headlines[i];
  	  	if (!userHeadline[headline.id]) {
  	  		$scope.userHeadlines.push(headline);
  	  		userHeadline[headline.id] = true;
  	  	}
  	  }
  	});
  }

}]);