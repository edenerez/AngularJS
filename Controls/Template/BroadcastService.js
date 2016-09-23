App.factory('BroadcastService', function ($rootScope) {
    return {
        send: function (key) {
            $rootScope.$broadcast(key);
        },
        subscribe: function (key, callback) {
            alert("subscribe: " + key);
            var handler = $rootScope.$on(key, callback);
            //scope.$on('$destroy', handler);
        },
        notify: function (key, msg) {
            alert("notify: " + key);
            $rootScope.$emit(key, msg);
        }
    };
});

