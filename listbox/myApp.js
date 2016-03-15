var myApp = angular.module("myApp", []);
myApp.factory("items", function () {
    var items = {};
    items.data = [{
        id: "1",
        title: "Class 1"
    }, {
        id: "2",
        title: "Class 2"
    }];
    return items;
});

function ItemsController($scope, items) {
    $scope.items = items;

    $scope.deleteItem = function (index) {
        items.data.splice(index, 1);
    }
    $scope.addItem = function (index) {
        items.data.push({
            id: $scope.items.data.length + 1,
            title: $scope.newItemName
        });
    }
}