(function () {
    'use strict';

    angular.module('app.article').directive('grySidenote', grySidenote);

    /* @ngInject */
    function grySidenote() {
        var directive = {
            restrict: 'A',
            replace: true,
            templateUrl: 'templates/article/sidenote/sidenote.html',
            controller: 'SidenoteController',
            controllerAs: 'sidenote'
        };

        return directive;
    }
})();
