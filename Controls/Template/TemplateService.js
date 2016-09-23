App.factory('TemplateService', function ($rootScope) {
    var service = {};
   
    service.templates = [];

    service.updateTemplateService = function (name, value) {
        if (this.templates[name] == null)
            this.templates[name] = {};
        this.templates[name].collection = value;
        $rootScope.$broadcast("update" + name + "TemplatesUpdated");
    }

    return service;
});