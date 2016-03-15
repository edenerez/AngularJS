var myApp = angular.module("myApp", []);

var AppController = function ($scope, $sce) {
    $scope.htmlContent = 'some<h2>h2</h2>test';
    $scope.trustedHtmlContent = $sce.trustAsHtml($scope.htmlContent);
}