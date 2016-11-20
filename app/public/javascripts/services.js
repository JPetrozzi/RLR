angular
    .module('RLRmodule')
    .service('AuthService', AuthService);

AuthService.$inject = ['$resource'];
function AuthService($resource) {
    this.register = $resource("http://localhost:3000/auth/signup");
    this.login = $resource("http://localhost:3000/auth/login", {'validLogin': {method: 'POST'}});
};
