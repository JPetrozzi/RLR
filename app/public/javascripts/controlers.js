angular
    .module('RLRmodule')
    .controller('HomeCtrl', homeCtrl);

homeCtrl.$inject = ['$scope','$localStorage','AuthService','LxDialogService','LxNotificationService'];
function homeCtrl($scope, $localStorage, AuthService, LxDialogService, LxNotificationService) {
    $scope.user = {};
    $scope.newUser = {};

    $scope.loginUser = function() {
        if (!$scope.user.email || !$scope.user.password) {
            LxNotificationService.error('Todos los campos son requeridos!');
            return;
        }

        AuthService.login.validLogin($scope.user, function(res) {
            if (res.type == false) {
                LxNotificationService.error(res.data);
            } else if (res.type == true) {
                $localStorage.token = res.token;

                LxDialogService.close(dialogId);
                LxNotificationService.success('Welcome ' + res.data.nombre + '!');
            } else {
                LxNotificationService.warning(res.data);
            }
        });
    };

    $scope.registerUser = function(dialogId) {
        if (!$scope.newUser.name || !$scope.newUser.lastname || !$scope.newUser.email || !$scope.newUser.password || !$scope.newUser.confirmPassword) {
            LxNotificationService.error('Todos los campos son requeridos!');
            return;
        }

        if ($scope.newUser.password !== $scope.newUser.confirmPassword) {
            LxNotificationService.error('Las contraseñas ingresadas deben ser iguales!');
            return;
        }

        AuthService.register.save($scope.newUser, function(res) {
            if (res.type == false) {
                LxNotificationService.error(res.data);
            } else if (res.type == true) {
                $localStorage.token = res.token;

                LxDialogService.close(dialogId);
                LxNotificationService.success('User Registered');
            } else {
                LxNotificationService.warning(res.data);
            }
        });
    };

    $scope.opendDialog = function(dialogId) {
        LxDialogService.open(dialogId);
    };

    $scope.showToken = function() {
        console.log('Token: ' + $localStorage.token);
    };
};
