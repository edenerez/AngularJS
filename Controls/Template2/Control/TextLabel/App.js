
var App = angular.module('App', []);
App.directive('collection', function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            collection: '='
        },
        template: "<ul><member ng-repeat='member in collection' member='member'></member></ul>"
    }
})

App.directive('member', function ($compile) {
    return {
        restrict: "E",
        replace: true,
        scope: {
            member: '='
        },
        template: "<li>{{member.name}}</li>",
        link: function (scope, element, attrs) {
            if (angular.isArray(scope.member.children)) {
                element.append("<collection collection='member.children'></collection>"); 
                $compile(element.contents())(scope)
            }
        }
    }
})
 