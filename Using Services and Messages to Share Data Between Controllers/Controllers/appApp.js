
// create the module and name it App
var appApp = angular.module('appApp', []);

appApp.factory('DemoService', function($rootScope){
  var service = {};
  service.topValue = 0;
  service.middleValue = 0;
  service.bottomValue = 0;

  service.updateTopValue = function(value){
    this.topValue = value;
    $rootScope.$broadcast("valuesUpdated");
  }

  service.updateMiddleValue = function(value){
    this.middleValue = value;
    $rootScope.$broadcast("valuesUpdated");
  }

  service.updateBottomValue = function(value){
    this.bottomValue = value;
    $rootScope.$broadcast("valuesUpdated");
  }

  return service;
});




