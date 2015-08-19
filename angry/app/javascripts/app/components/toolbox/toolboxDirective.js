'use strict';

angry.directive('gryToolbox', [
    function() {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'templates/app/components/toolbox.html',
            controller: 'ToolboxController'
        };
    }
]);