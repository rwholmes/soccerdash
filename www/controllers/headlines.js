angular.module('app.headlines', [])

.controller('HeadlinesCtrl', ['$scope', 'Headlines', function($scope, Headlines) {

  Headlines.getHeadlines().then(function(data) {
    $scope.headlines = data.data.headlines;
  });
  
}]);