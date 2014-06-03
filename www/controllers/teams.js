
app.controller('TeamsCtrl', function($scope, $http, linkServices) {
  var teams = linkServices.getTeams().then(function(data) {
    $scope.teams = data;
  });
  $scope.remove = function() {
    console.log('trying to remove ang-shortly');
    $http({
      method: 'POST',
      url: '/removeTeams',
      data: {}
    });
  };
});