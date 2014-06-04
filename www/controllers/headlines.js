angular.module('app.headlines', [])

.controller('HeadlinesCtrl', ['$scope', 'Headlines', function($scope, Headlines) {

  Headlines.getHeadlines().then(function(data) {
    console.log('calling getHeadlines (ctrl)');
    $scope.headlines = data.data.headlines;
  });
  
}]);