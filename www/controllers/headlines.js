angular.module('app.headlines', [])

.controller('HeadlinesCtrl', ['$scope', 'Headlines', function($scope, Headlines) {
  // var headlines = dataServices.getHeadlines().then(function(data) {
  //   console.log('HEADLINES LENGTH: ', data.data.headlines.length);
  //   var articles = data.data.headlines;
  //   var filtered = [];
  //   if (articles) {
  //     for (var i=0; i<articles.length; i++) {
  //       for (var k=0; k<articles[i].keywords.length; k++) {
  //         if (userTeams[articles[i].keywords[k]]) {
  //           console.log('found team');
  //           filtered.push(articles[i]);
  //         }
  //       }
  //     }
  //     $scope.headlines = filtered;
  //   }
  // });
  
}]);