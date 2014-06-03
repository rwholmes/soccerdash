angular.module('app', [
  'ui.router'
])

.controller('AppCtrl', function($scope) {
  
})

.config(function($stateProvider, $urlRouterProvider) {
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

});










