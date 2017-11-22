App.directive('radioButtonGroup', function () {
    return {
        restrict: 'AE',
        scope: {
            name: '@name',
            title: '@title',
            selected: '@selected',
            items: '='
        },
        templateUrl: 'Control/RadioButtonGroup/RadioButtonGroup.html',
        controller: ['$scope', 'RadioButtonGroupService', function ($scope, RadioButtonGroupService, BroadcastService) {
            if (RadioButtonGroupService.groups[$scope.name] == null)
                RadioButtonGroupService.groups[$scope.name] = {};
            RadioButtonGroupService.groups[$scope.name].name = $scope.name;
            RadioButtonGroupService.groups[$scope.name].title = $scope.title;
            RadioButtonGroupService.groups[$scope.name].valueSelected = $scope.selected;
            RadioButtonGroupService.groups[$scope.name].items = $scope.items;
       
            RadioButtonGroupService.updateSubscribe('update' + $scope.name + 'GroupValuesUpdated',
                RadioButtonGroupService.DoSelect);


            $scope.$watch('selected', function () {
                RadioButtonGroupService.updateGroupSelected($scope.name, $scope.selected);
            });
            
            $scope.updateSelected = function (item, index) {
                $scope.selected = item.value;
            };

        }]
    };
});