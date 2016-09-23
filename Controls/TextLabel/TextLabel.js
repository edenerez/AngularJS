App.directive('textLabel', function () {
    return {
        restrict: 'AE',
        scope: {
            text: '@text',
            myStyle: '@myStyle',
            myClass: '@myClass'
        },
        templateUrl: 'TextLabel.html',
        controller: ['$scope', 'TextLabelService', function ($scope, TextLabelService) {

        }]
    };
});