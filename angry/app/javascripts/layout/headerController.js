'use strict';

angry.controller('HeaderController', [
    '$scope',
    function($scope) {
        var actions = {
            nav: function() { console.log('navigate, bitch!'); },
            logout: function() { console.log('logout, bitch!'); },
            notifications: function() { console.log('notify me, bitch!'); },
            search: function() { console.log('search, bitch!'); }
        }
        $scope.header = function(action) {
            actions[action]();
        }
    }
]);