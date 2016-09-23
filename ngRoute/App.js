
var App = angular.module('App', ['ngRoute']);

App.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/Websites', {
            templateUrl: 'Websites/template.html',
            controller: 'WebsitesController'
        }).
        when('/Website', {
            templateUrl: 'Website/template.html',
            controller: 'WebsiteController'
        }).
        otherwise({
            redirectTo: '/Websites'
        });
  }]);