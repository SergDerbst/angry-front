(function () {
    'use strict';

    angular.module('app.article').directive('gryToolbox', toolboxDirective);

    /* @ngInject */
    function toolboxDirective() {
        var directive = {
            restrict: 'A',
            replace: true,
            templateUrl: 'templates/article/toolbox/toolbox.html',
            controller: 'ToolboxController',
            controllerAs: 'toolbox'
        };

        return directive;
    }
})();
