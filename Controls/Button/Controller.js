
// create the controller and inject Angular's $scope
App.controller('cnrl', function ($scope, ButtonService) {

    $scope.buttonName = "buttonName1";

    $scope.Login = function (msg) {
        if (msg == null)
            alert("msg is null");
        else
            alert(msg);
    };

});


