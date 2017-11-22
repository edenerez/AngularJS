
// create the controller and inject Angular's $scope
App.controller('cnrl', function ($scope, BroadcastService) {

    $scope.arrayName = [{ id: 1, value: 'value1', label: 'label1' }, { id: 2, value: 'value2', label: 'label2' }, { id: 3, value: 'value3', label: 'label3' }];
    $scope.arrayName2 = [{ id: 1, value: 'val1', label: 'lab1' }, { id: 2, value: 'val2', label: 'lab2' }, { id: 3, value: 'val3', label: 'lab3' }];
    $scope.NameOfGroup = 'groupName';
    $scope.NameOfGroup2 = 'groupName2';


    alert("1");
    BroadcastService.subscribe( 
        'update' + $scope.NameOfGroup + 'GroupValuesUpdated',
        function (event, msg) {
            alert("bla: " + msg);
        }
    );
    alert("2");
    BroadcastService.subscribe(
        'update' + $scope.NameOfGroup2 + 'GroupValuesUpdated',
        function (event, msg) {
            alert("bla: " + msg);
        }
    );
    alert("3");

    /*
    $scope.$on('update' + $scope.NameOfGroup + 'GroupValuesUpdated', function () {
        $scope.selected = RadioButtonGroupService.groups[$scope.NameOfGroup].valueSelected;
    });


    $scope.$on('update' + $scope.NameOfGroup2 + 'GroupValuesUpdated', function () {
        $scope.selected = RadioButtonGroupService.groups[$scope.NameOfGroup2].valueSelected;
    });
    */
});


