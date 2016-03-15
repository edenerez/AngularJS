angular.module('plunker', ['angularCharts']);

function MainCtrl($scope) {
    $scope.config = {
        title: 'Unmasking results',
        tooltips: true,
        labels: false,
        mouseover: function () { },
        mouseout: function () { },
        click: function () { },
        legend: {
            display: true,
            //could be 'left, right'
            position: 'right'
        }
    };

    $scope.data = {
        series: ['Curve'],
        data: [{
            x: "1",
            y: [0.98],
            tooltip: "this is tooltip"
        }, {
            x: "2",
            y: [0.96]
        }, {
            x: "3",
            y: [0.92]
        }, {
            x: "4",
            y: [0.89]
        }, {
            x: "5",
            y: [0.87]
        }, {
            x: "6",
            y: [0.75]
        }, {
            x: "7",
            y: [0.6]
        }, {
            x: "8",
            y: [0.5]
        }]
    };
}