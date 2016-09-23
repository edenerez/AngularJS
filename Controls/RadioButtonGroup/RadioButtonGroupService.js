App.factory('RadioButtonGroupService', function ($rootScope) {
    var service = {};
    service.groups = [];

    service.updateGroupSelected = function (name, value) {
        if (this.groups[name] == null)
            this.groups[name] = {};
        this.groups[name].valueSelected = value;
        $rootScope.$broadcast("update" + name + "GroupValuesUpdated");
    }
    
    return service;
});