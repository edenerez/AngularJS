App.factory('RadioButtonGroupService', function (BroadcastService) {
    var service = {
        //http://stackoverflow.com/questions/21346565/how-to-pass-an-object-using-rootscope
        //http://stackoverflow.com/questions/19446755/on-and-broadcast-in-angular
        DoSelect: function (event, msg) {
            if (msg == null)
                alert("msg is null");
            else
                alert(msg);
        }
    }
    service.groups = [];

    service.updateSubscribe = function (name, fn) {
        BroadcastService.subscribe(name,fn);
    };

    service.updateGroupSelected = function (name, value) {
        if (this.groups[name] == null) {
            this.groups[name] = {};
        }
        this.groups[name].valueSelected = value;
        //$rootScope.$emit("update" + name + "GroupValuesUpdated");
        BroadcastService.notify(
            "update" + name + "GroupValuesUpdated",
            value);
    }
    return service;
});