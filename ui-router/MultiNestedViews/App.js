// http://stackoverflow.com/questions/21023763/angularjs-difference-between-angular-route-and-angular-ui-router
// https://github.com/angular-ui/ui-router
// Relative vs. Absolute Names: https://github.com/angular-ui/ui-router/wiki/Multiple-Named-Views
// parameters: https://github.com/angular-ui/ui-router/wiki/URL-Routing
// views as children: https://github.com/angular-ui/ui-router/wiki/Nested-States-and-Nested-Views
// resolved for injectation: https://github.com/angular-ui/ui-router/wiki
// dynamic route: http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$stateProvider#methods_decorator

var myapp = angular.module('myapp', ["ui.router"])
myapp.config(function ($stateProvider) {
    $stateProvider
        .state('index', {
            url: "",
            views: {
                "header": {
                    template: "index.header"
                },
                "content": {
                    templateUrl: "route1.list.html",
                    controller: function ($scope) {
                        $scope.items = ["A", "List", "Of", "Items"];
                    }
                },
                "footer": {
                    template: "index.footer"
                }
            }
        })
        .state('route1', {
            url: "/route1",
            views: {
                "header": {
                    template: "route1.header"
                },
                "content": {
                    templateUrl: "route1.html"
                },
                "footer": {
                    template: "route1.footer"
                }
            }
        })
        .state('route1.list', {
            url: "/list",
            templateUrl: "route1.list.html",
            controller: function ($scope) {
                $scope.items = ["route1", "List", "Of", "Items"];
            }
        })
        .state('route2', {
            url: "/route2",
            views: {
                "header": {
                    template: "route2.header"
                },
                "content": {
                    templateUrl: "route2.html"
                },
                "footer": {
                    template: "route2.footer"
                }
            }
        })
        .state('route2.list', {
            url: "/list",
            templateUrl: "route2.list.html",
            controller: function ($scope) {
                $scope.things = ["route2", "Set", "Of", "Things"];
            }
        })
})