
// create the controller and inject Angular's $scope
App.controller('cnrl', function ($scope, TextInputService) {

    $scope.txtInputName = "txtinput1";

    $scope.Login = function (msg) {
        if (msg == null)
            alert("msg is null");
        else
            alert(msg);
    };
    
    $scope.$on('update' + $scope.txtInputName + 'textInputsUpdated', function () {
        $scope.txtInput = TextInputService.textInputs[$scope.txtInputName].text;
    });

});


