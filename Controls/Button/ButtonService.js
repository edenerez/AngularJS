App.factory('ButtonService', function ($rootScope) {
    //http://stackoverflow.com/questions/16477123/how-do-i-use-on-in-a-service-in-angular
    var service = {
        //http://stackoverflow.com/questions/21346565/how-to-pass-an-object-using-rootscope
        //http://stackoverflow.com/questions/19446755/on-and-broadcast-in-angular
        Login: function (event, msg) {
            if (msg == null)
                alert("msg is null");
            else
                alert(msg);
        }
    }
    $rootScope.$on("buttonName1", service.Login);
    
    return service;
});