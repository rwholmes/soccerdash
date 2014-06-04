angular.module('app.services.headlines', [])

.service('Headlines', ['$http', 'Espn', function($http, Espn) {
  
  this.getHeadlines = function() {
    return Espn.get('premier', 'headlines');
  };

}]);