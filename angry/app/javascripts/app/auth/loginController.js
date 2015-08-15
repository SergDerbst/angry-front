'use strict';

angular.module('angry').controller('LoginController', [
    '$rootScope',
    '$scope',
    '$state',
    'authService',
    function($rootScope, $scope, $state, authService) {
        var generateMessage = function() {
            if(!$scope.user || !$scope.user.username) {
                return 'Enter username or email.';
            }
            if(!$scope.user.password) {
                return 'Enter password.';
            }
            return "";
        };
        $scope.message = generateMessage();
        $scope.user = {};
        $scope.update = function(){
            $scope.message = generateMessage();
        };
        $scope.submit = function(valid) {
            if(valid) {
                authService.authenticate($scope.user, null, $scope);
            }
        };
    }
]);