(function () {
    'use strict';

    angular.module('app.article').directive('gryFootnote', gryFootnote);

    /* @ngInject */
    function gryFootnote() {
        var directive = {
            restrict: 'A',
            replace: true,
            templateUrl: 'templates/article/footnote/footnote.html',
            controller: 'FootnoteController',
            controllerAs: 'footnote'
        };

        return directive;
    }
})();
