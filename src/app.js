/// Main App

var app = angular.module('portafolioApp', ['ngRoute', 'ui.bootstrap']);
app.controller('CurriculumController', CurriculumController);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            action: "index",
            controller: 'CurriculumController',
            templateUrl: GlobalConstants.baseUrl + '../src/cv/cv.template.html'
        })
        .when('cv', {
            action: "curriculum",
            controller: 'CurriculumController',
            templateUrl: GlobalConstants.baseUrl + 'cv/cv.template.html' 
        })
        .otherwise({ redirectTo: '/' });

});