angular.module('contextMenuModule', ['tree.service'])

.directive('popover', ['$compile', 'NodeTrackingService', function (compile, NodeTrackingService) {
    return {
        scope: false,
        replace: false,
        link: function ($scope, element, attributes) {
            
            $scope.Print = function () {
                alert("Problem with Print");
            };

            $scope.Customsie = function () {
                handleClickEvent();
                //$state.go('main.document.customise', { id: attributes.nodeid });
            };

            $scope.CopyAndCustomsie = function () {
                handleClickEvent();
                //$state.go('main.document.customise', { id: result.DocumentId });
            };

            $scope.CopyDocuments = function (event) {
                handleClickEvent();
                NodeTrackingService.setRightClickAndAction(true);
                //$state.go('main.documents.copy');
            };

            $scope.Delete = function () {
                handleClickEvent();
                NodeTrackingService.setRightClickAndAction(true);
                //$state.go('main.documents.delete');
            };

            $scope.Approve = function () {
                handleClickEvent();
                NodeTrackingService.setRightClickAndAction(true);
                //$state.go('main.documents.approve');
            };

            $scope.AddToFolder = function () {
                handleClickEvent();
                //$state.go('main.documents.addToFolder');
            };

            $scope.RemoveFromFolder = function () {
                handleClickEvent();
                NodeTrackingService.setRightClickAndAction(true);
                //$state.go('main.documents.removeFromFolder');
            };

            /* SERVICE MODEL FOLDER OPTIONS*/

            $scope.CreateFolder = function () {
                handleClickEvent();
                $scope.$parent.createFolder();
            };
            $scope.RenameFolder = function () {
                handleClickEvent();
                $scope.$parent.setIsReadOnly(false);
            };
            $scope.Cut = function () {
                handleClickEvent();
                $scope.$parent.cut();
            };
            $scope.Copy = function () {
                handleClickEvent();
                $scope.$parent.copy();
            };
            $scope.Paste = function () {
                handleClickEvent();
                $scope.$parent.paste();
            };
            $scope.DeleteFolders = function () {
                handleClickEvent();
                $scope.$parent.deleteFolders();
            };


            element.on("contextmenu", function (event) {
                
                
                var htmlTemplate = '';
                var showRightClick = true;

                handleClickEvent();
                event.preventDefault(); // default context menu is disabled
                event.stopPropagation();

                var screenHeight = screen.height;
                var xPosition = event.clientX - element[0].getBoundingClientRect().left;
                var yPosition = event.clientY - element[0].getBoundingClientRect().top;
            

                        htmlTemplate =
                            '<ul id="contextmenu-node" class="dropdown-menu">';
                        htmlTemplate +=
                            '<li><a ng-mousedown="$event.preventDefault();$event.stopPropagation();" ng-click="$event.stopPropagation();Cut()">Cut</a></li>' +
                            '<li><a ng-mousedown="$event.preventDefault();$event.stopPropagation();" ng-click="$event.stopPropagation();Copy()">Copy</a></li>';
                        
                        if (NodeTrackingService.getCopiedNodesCount() > 0) {
                            htmlTemplate += '<li><a ng-mousedown="$event.preventDefault();$event.stopPropagation();" ng-click="$event.stopPropagation();Paste()">Paste</a></li>';
                        }
                        htmlTemplate += '<li><a ng-mousedown="$event.preventDefault();$event.stopPropagation();" ng-click="$event.stopPropagation();RemoveFromFolder()">Delete From Service Model</a></li>';
                        htmlTemplate += '<li><a ng-mousedown="$event.preventDefault();$event.stopPropagation();" ng-click="$event.preventDefault();$event.stopPropagation();CopyDocuments($event)">Copy To Draft</a></li>';
                        htmlTemplate += '</ul>';

                    var newElement = compile(htmlTemplate)($scope);
                    newElement.css({
                        left: xPosition + 'px',
                        top: yPosition + 'px'
                    });                    
                    element.append(newElement);

  
            });

            element.on("mouseleave", function () {
                // on mouse leave, the context menu is removed.
                handleClickEvent();
            });

            function handleClickEvent() {
                if ($("#contextmenu-node")) {
                    $("#contextmenu-node").remove();
                    element.css('background-color', 'White');
                }
            }

            $scope.$on('$destroy', function () {
                $(document).unbind('mouseleave', handleClickEvent);
                $(document).unbind('contextmenu', handleClickEvent);
            });

        }
    };
}])

