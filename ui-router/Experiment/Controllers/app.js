// app.js
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partials/partial-home.html'
        })


    // nested list with custom controller
    .state('home.list', {
        url: '/list',
        templateUrl: 'partials/partial-home-list.html',
        controller: function ($scope) {
            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        }
    })

    // nested list with just some random string data
    .state('home.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a drink right now.'
    })


    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================    
    .state('about', {
        url: '/about',
        templateUrl: 'partials/partial-about.html'
    })

});

    
