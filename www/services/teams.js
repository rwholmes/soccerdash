angular.module('app.services.teams', [])

.service('Teams', ['$http', 'Espn', function($http, Espn) {

  var userTeams = [];
  
  this.getTeams = function() {
    return Espn.get('premier', 'teams');
  };

  this.addUserTeam = function(team) {
    userTeams.push(team);
    console.log('userTeams ', userTeams);
  };
  
  this.getUserTeams = function() {
    return userTeams;
  };

}]);