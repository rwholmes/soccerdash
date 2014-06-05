angular.module('app.services.headlines', [])

.service('Headlines', ['$http', 'Espn', function($http, Espn) {

  this.getHeadlines = function(teamId) {
    return Espn.get('premier', 'headlines', teamId);
  };

}]);