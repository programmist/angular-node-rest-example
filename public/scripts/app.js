// Declare app level module which depends on filters, and services
angular.module('myApp', ['ngRoute', 'ngAnimate', 'myServices', 'myDirectives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/users', {templateUrl: 'views/users.html', controller: UserListController})
    .when('/users/:userId', {templateUrl: 'views/user-detail.html', controller: UserDetailController})
    .otherwise({redirectTo: '/users'});
  }]);