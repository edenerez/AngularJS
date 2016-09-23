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

            $scope.save= function() {
                alert("sfa");
            };
        },
        link: function (scope, element, attrs) {
            if (angular.isArray(scope.member.children)) {
                //element.append("<template collection='member.children'></template>");
                element.append('<button ng-click="save();">click</button>');
                $compile(element.contents())(scope)
            }
        }
        
    }
})