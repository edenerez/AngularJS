App.factory('TextInputService', function ($rootScope) {
    var service = {};
   
    service.textInputs = [];


    service.updateTextInputService = function (name, value) {
        if (this.textInputs[name] == null)
            this.textInputs[name] = {};
        this.textInputs[name].text = value;
        $rootScope.$broadcast("update" + name + "textInputsUpdated");
    }

    return service;
});