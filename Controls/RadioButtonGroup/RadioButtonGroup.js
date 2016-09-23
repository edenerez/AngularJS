App.directive('radioButtonGroup', function () {
    return {
        restrict: 'AE',
        scope: {
            name: '@name',
            title: '@title',
            selected: '@selected',
            items: '='
        },
        templateUrl: 'RadioButtonGroup.html',
        controller: ['$scope', 'RadioButtonGroupService', function ($scope, RadioButtonGroupService) {
            if(RadioButtonGroupService.groups[name] == null)
                RadioButtonGroupService.groups[name] = {};
            RadioButtonGroupService.groups[name].name = $scope.name;
            RadioButtonGroupService.groups[name].title = $scope.title;
            RadioButtonGroupService.groups[name].valueSelected = $scope.selected;
            RadioButtonGroupService.groups[name].items = $scope.items;
       
            $scope.$watch('selected', function () {
                RadioButtonGroupService.updateGroupSelected($scope.name, $scope.selected);
            });
            
            $scope.updateSelected = function (item, index) {
                $scope.selected = item.value;
            };

        }]
    };
});