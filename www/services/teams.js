angular.module('app.services.teams', [])

.service('Teams', ['$http', 'Espn', function($http, Espn) {
  
  this.getTeams = function() {

    return Espn.get('premier', 'teams');
  };
  

}]);