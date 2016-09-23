
App.directive('tabs', function () {
    return {
        restrict: 'AE',
        scope: {
            name: '@name',
            text: '@text',
            focusId: '@focusId',
            doEnter: '&doEnter'
        },
        templateUrl: 'Tabs.html',
        controller: ['$scope', '$compile', '$element', function ($scope, $compile, $element) {
            $scope.tabs = [{
                id: 1,
                content: '<button>test</button>'
            }]

            $scope.counter = 1;
            /** Function to add a new tab **/
            $scope.addTab = function () {
                $scope.counter++;
                $scope.tabs.push({ id: $scope.counter, content: '<button>test2' + $scope.counter + '</button>' });
                $scope.selectedTab = $scope.tabs.length - 1; //set the newly added tab active. 

                /*
                //http://stackoverflow.com/questions/15279244/dynamically-add-directive-in-angularjs
                $element.append("<button>test</button>");
                $compile($element.contents())($scope);
                //or
                var el = $compile("<button>test2</button>")($scope);
                $element.parent().append(el);
                */
            }

            /** Function to delete a tab **/
            $scope.deleteTab = function (index) {
                $scope.tabs.splice(index, 1); //remove the object from the array based on index
            }

            $scope.selectedTab = 0; //set selected tab to the 1st by default.

            /** Function to set selectedTab **/
            $scope.selectTab = function (index) {
                $scope.selectedTab = index;
            }

        }]
    };
});


App.directive('tab', function ($compile) {
    return {
        restrict: "E",
        replace: true,
        scope: {
            content: '@'
        },
        template: "<div>content from template: {{content}}<br/></div>",
        controller: ['$scope', function ($scope) {
        }],
        link: function (scope, element, attrs) {
            scope.content = attrs["content"];
            alert(scope.content);
            if (!angular.isUndefined(scope.content)) {
                
                if (scope.content.length > 0) {
                    
                    element.append(scope.content);
                    $compile(element.contents())(scope)
                }
            }

        }
    }
})