
App.directive('flowButton', function () {
    return {
        restrict: 'AE',
        scope: {
            name: '@name',
            text: '@text',
            focusId: '@focusId',
            doEnter: '&doEnter'
        },
        templateUrl: 'Control/Button/Button.html',
        controller: ['$scope', 'focus', 'ButtonService', 'BroadcastService', function ($scope, focus, ButtonService, BroadcastService) {
            if ($scope.focusId.length > 0) {
                focus($scope.focusId);
            }

            //http://stackoverflow.com/questions/18378520/angularjs-pass-function-to-directive
            $scope.doClick = function (msg) {
                //$scope.doEnter()("Directive Args from control text: " + $scope.text + " name: " + msg);
                BroadcastService.notify($scope.name, msg);
            };

        }]
    };
});