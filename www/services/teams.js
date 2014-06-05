angular.module('app.services.teams', [])

.service('Teams', ['$http', 'Espn', 'Headlines', function($http, Espn, Headlines) {

  var userTeams = [];
  
  this.isTeam = function(team) {
    if (userTeams.indexOf(team) === -1) {
      return false;
    }
    return true;
  }

  this.getTeams = function() {
    return Espn.get('premier', 'teams');
  };

  this.addUserTeam = function(team) {
    userTeams.push(team);
  };
  
  this.getUserTeams = function() {
    return userTeams;
  };

}]);