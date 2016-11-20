angular
    .module('RLRmodule',['ngRoute','ngResource','ngStorage','lumx'])
    .config(configModule);

configModule.$inject = ['$httpProvider','$routeProvider'];
function configModule($httpProvider, $routeProvider, $localStorage) {

    $routeProvider
    .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });

    $httpProvider
        .interceptors.push(interceptorMethod);

};

interceptorMethod.$inject = ['$q','$location','$localStorage'];
function interceptorMethod($q, $location, $localStorage) {
    return {
        'request': function(config) {
            config.headers = config.headers || {};

            if ($localStorage.token) {
                config.headers.Authorization = 'Bearer' + $localStorage.token;
            }

            return config;
        },
        'responseError': function(response) {
            if (response.status === 401 || response.status === 403) {
                $location.path('/');
            }

            return $q.reject(response);
        }
    };
};
