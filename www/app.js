angular.module('app', [
  'ui.router',
  'app.services.espn',
  'app.services.teams',
  'app.services.headlines',
  'app.teams',
  'app.headlines'
])

.controller('AppCtrl', function($scope) {
  
})

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('main', {
      url: '/',
      templateUrl: 'linksList.html',
      controller: 'appController'
    })
    
    .state('create', {
      url: '/create',
      templateUrl: 'createLink.html',
      controller: 'Ctrl'
    });

  $urlRouterProvider.when('', '/');

}]);


