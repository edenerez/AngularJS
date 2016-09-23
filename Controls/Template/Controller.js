
// create the controller and inject Angular's $scope
App.controller('cnrl', function ($scope, $http, TemplateService, ButtonService, RadioButtonGroupService, TextInputService) {

    //$scope.modelAsJson = angular.toJson($scope.json2, true);
    //alert($scope.modelAsJson);
    $http.get('json/file1.json').success(function (data) {
        $scope.json = data;
    });
    $http.get('json/file2.json').success(function (data) {
        $scope.json2 = data;
    });

});


