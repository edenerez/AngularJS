App.directive('textInput', function () {
    return {
        restrict: 'AE',
        scope: {
            name: '@name',
            userInput: '@userInput',
            focusId: '@focusId',
            doEnter: '&doEnter'
        },
        templateUrl: 'Control/TextInput/TextInput.html',
        controller: ['$scope', 'focus', 'TextInputService', function ($scope, focus, TextInputService) {
            if ($scope.focusId.length > 0) {
                focus($scope.focusId);
            }

            //http://stackoverflow.com/questions/18378520/angularjs-pass-function-to-directive
            //$scope.doEnter()("Directive Args from JS");

            TextInputService.updateTextInputService($scope.name, $scope.userInput);

            $scope.$watch('userInput', function () {
                TextInputService.updateTextInputService($scope.name, $scope.userInput);
            });


        }]
    };
});