'use strict';

angry.controller('ToolboxController', [
    '$scope',
    '$state',
    function($scope, $state) {
        var actions = {
            write: function() {
                //TODO check authenticated and permitted, redirect if not
                $state.go('go.write.article');
            }
        }
        $scope.toolbox = function(action) {
            actions[action]();
        };
    }
]);