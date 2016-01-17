angular
    .module('RLRmodule')
    .controller('HomeCtrl', homeCtrl);

homeCtrl.$inject = ['$scope','AuthService','LxDialogService'];
function homeCtrl($scope, AuthService, LxDialogService) {
    $scope.user = {};
    
    $scope.opendDialog = function(dialogId) {
        LxDialogService.open(dialogId);
    };
};