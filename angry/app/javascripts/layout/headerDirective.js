'use strict';

angry.directive('gryHeader', [
    function() {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'templates/ui/header.html',
            controller: 'HeaderController'
        };
    }
]);