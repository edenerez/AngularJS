App.directive('row', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            name: '@name',
            collection: '='
        },
        templateUrl: 'row.html',
        controller: ['$scope', 'TemplateService', function ($scope, TemplateService) {
            alert("$scope.name: " + $scope.name);
            TemplateService.updateTemplateService($scope.name, $scope.collection);

        }]
    };
});


App.directive('column', function ($compile) {
    return {
        restrict: "E",
        replace: true,
        scope: {
            member: '='
        },
        template: "<div class=\"col-md-{{member.value}}\">{{member.value}}</div>",
        controller: ['$scope', function ($scope) {

            $scope.buttonName = "buttonName1";
   
            $scope.Login = function (msg) {
                if (msg == null)
                    alert("msg is null");
                else
                    alert(msg);
            };
            



            $scope.arrayName = [{ id: 1, value: 'value1', label: 'label1' }, { id: 2, value: 'value2', label: 'label2' }, { id: 3, value: 'value3', label: 'label3' }];
            $scope.arrayName2 = [{ id: 1, value: 'val1', label: 'lab1' }, { id: 2, value: 'val2', label: 'lab2' }, { id: 3, value: 'val3', label: 'lab3' }];
            $scope.NameOfGroup = 'groupName';
            $scope.$on('update' + $scope.NameOfGroup + 'GroupValuesUpdated', function () {
                $scope.selected = RadioButtonGroupService.groups[$scope.NameOfGroup].valueSelected;
            });
            $scope.NameOfGroup2 = 'groupName2';
            $scope.$on('update' + $scope.NameOfGroup2 + 'GroupValuesUpdated', function () {
                $scope.selected = RadioButtonGroupService.groups[$scope.NameOfGroup2].valueSelected;
            });


            $scope.txtInputName = "txtinput1";
            $scope.$on('update' + $scope.txtInputName + 'textInputsUpdated', function () {
                $scope.txtInput = TextInputService.textInputs[$scope.txtInputName].text;
            });


        }],
        link: function (scope, element, attrs) {
            if (angular.isArray(scope.member.children)) {
                element.append("<row name='{{member.rowName}}' collection='member.children'></row>");
                $compile(element.contents())(scope)
            }
            if (!angular.isUndefined(scope.member.content)) {
                
                if (!angular.isUndefined(scope.member.content.type) && scope.member.content.type.length > 0) {
                    element.append("<" + scope.member.content.type + " text=\"" +
                        scope.member.content.text + "\" />");
                    $compile(element.contents())(scope)
                }
                else {
                    if (scope.member.content.length > 0) {
                        element.append("<" + scope.member.content + " />");
                        $compile(element.contents())(scope)
                    }
                }
            }
                
        }
    }
})