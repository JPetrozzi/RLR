angular
    .module('RLRmodule',['ngResource','ngRoute','satellizer','lumx'])
    .config(configModule);

configModule.$inject = ['$authProvider','$routeProvider'];

function configModule($authProvider, $routeProvider) {
    $authProvider.loginUrl = "http://localhost:3000/api/login";
    $authProvider.signupUrl = "http://localhost:3000/api/signup";
    $authProvider.tokenName = "token";
    $authProvider.tokenPrefix = "RLR";

    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        });
};