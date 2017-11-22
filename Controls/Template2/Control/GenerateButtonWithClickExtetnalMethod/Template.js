App.directive('template', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            name: '@name',
            collection: '='
        },
        templateUrl: 'Template.html',
        controller: ['$scope', function ($scope) {
           

        }]
    };
});


App.directive('member', function ($compile) {
    return {
        restrict: "E",
        replace: true,
        scope: {
            member: '='
        },
        template: "<div>{{member.name}}</div>",
        //http://jsfiddle.net/jaimem/y85Ft/7/
        controller: function ($scope, $element, $attrs) {
            
            $scope.save= function(msg) {
                alert(msg);
            };
        },
        link: function (scope, element, attrs) {
            if (angular.isArray(scope.member.children)) {
                element.append("<my-widget2 click-fn='save(msg)' text='{{member.name}}'></my-widget2>");
                //$element.append('<button ng-click="save();">click</button>');
                $compile(element.contents())(scope)
            }

        }
       
    }
})


//<my-widget2 text="Hello World"></my-widget2>
App.directive("myWidget2", function () {
    return {
        restrict: "E",
        template: '<button ng-click="clickFn({msg: text});">click</button>',
        scope: {
            text: "@text",
            clickFn: "&"
        }
    };
});