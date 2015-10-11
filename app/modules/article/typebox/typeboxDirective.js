(function () {
    'use strict';

    angular.module('app.article').directive('typeboxDirective', typeboxDirective);

    /* @ngInject */
    function typeboxDirective(keyEventService) {
        var directive = {
            restrict: 'A',
            replace: false,
            link: link
        };

        return directive;

        function _onKeydown(event) {
            keyEventService.down(event.keyCode);
        }

        function _onKeyup(event) {
            keyEventService.up(event.keyCode);
        }

        function _onInput(event) {
            keyEventService.input(event.keyCode);
        }

        function link(scope, element) {
            keyEventService.configure(element);
            element.on('keydown', _onKeydown());
            element.on('keypress', _onKeyup());
            element.on('input', _onInput());
        }
    }
})();
