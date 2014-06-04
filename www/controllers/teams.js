angular.module('app.teams', [])

.controller('TeamsCtrl', ['$scope', 'Teams', function($scope, Teams) {
  
  Teams.getTeams().then(function(data) {
  	$scope.teams = data.data.sports[0].leagues[0].teams;
  	console.log($scope.teams);
  });

}]);