
// create the controller and inject Angular's $scope
App.controller('cnrl', function ($scope) {

    
    $scope.tasks = [
		{
		    name: 'Europe',
		    children: [
				{
				    name: 'Italy',
				    children: [
						{
						    name: 'Rome'
						},
						{
						    name: 'Milan'
						}
				    ]
				},
				{
				    name: 'Spain'
				}
		    ]
		},
		{
		    name: 'South America',
		    children: [
				{
				    name: 'Brasil'
				},
				{
				    name: 'Peru'
				}
		    ]
		}
    ];


});


