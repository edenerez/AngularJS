
// create the controller and inject Angular's $scope
appApp.controller('cntrlController', function ($scope) {

    $scope.items = [
     { id: 1, name: 'foo' },
     { id: 2, name: 'bar' },
     { id: 3, name: 'blah' }
   ];
});


