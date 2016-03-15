'use strict';

/**
 * @ngdoc overview
 * @name angularjsDynamicTreeApp
 * @description
 * # angularjsDynamicTreeApp
 *
 * Main module of the application.
 */
angular
  .module('angularjsDynamicTreeApp', [
    'ngAnimate',
    'ngRoute',
   'treeModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
