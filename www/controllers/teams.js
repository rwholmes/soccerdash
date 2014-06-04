angular.module('app.teams', [])

.controller('TeamsCtrl', ['$scope', 'Teams', function($scope, Teams) {
  
  Teams.getTeams().then(function(data) {
  	$scope.teams = data.data.sports[0].leagues[0].teams;
  });

  $scope.userTeams = Teams.getUserTeams();

  $scope.addTeam = function(team) {
  	console.log('calling add team');
  	Teams.addUserTeam(team);
  }

}]);