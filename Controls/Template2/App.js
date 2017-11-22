
var App = angular.module('App', []);


//<my-widget2 text="Hello World"></my-widget2>
App.directive("myWidget2", function () {
    return {
        restrict: "E",
        template: "{{text}} <p>I am directive widget that generated from other directive as agrument</p>",
        scope: {
            text: "@text"
        }
    };
});



App.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});

App.factory('focus', function ($rootScope, $timeout) {
    return function (name) {
        $timeout(function () {
            $rootScope.$broadcast('focusOn', name);
        });
    }
});

App.directive('focusOn', function () {
    return function (scope, elem, attr) {
        scope.$on('focusOn', function (e, name) {
            if (name === attr.focusOn) {
                elem[0].focus();
            }
        });
    };
});