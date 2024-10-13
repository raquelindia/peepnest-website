var app = angular.module('peepnestApp', ["ngRoute"]);
app.controller('appController', function($scope){


});
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "home.html",
            controller: 'appController'
        })
})