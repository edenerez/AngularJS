
App.directive('flowButton', function () {
    return {
        restrict: 'AE',
        scope: {
            name: '@name',
            text: '@text',
            focusId: '@focusId',
            doEnter: '&doEnter'
        },
        templateUrl: 'Button.html',
        controller: ['$scope', 'focus', 'ButtonService', '$rootScope', function ($scope, focus, ButtonService, $rootScope) {
            if ($scope.focusId.length > 0) {
                focus($scope.focusId);
            }

            //http://stackoverflow.com/questions/18378520/angularjs-pass-function-to-directive
            //$scope.doEnter()("Directive Args from JS");
            $scope.doClick = function (msg) {
                //$scope.doEnter()("Directive Args from control text: " + $scope.text + " name: " + msg);
                $rootScope.$broadcast($scope.name, " name: " + msg);
            };
        }]
    };
});