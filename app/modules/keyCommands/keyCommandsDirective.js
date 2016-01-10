(function () {
    'use strict';

    angular.module('app.keyCommands').directive('gryKeyCommands', keyCommandsDirective);

    /* @ngInject */
    function keyCommandsDirective(keyEventService) {
        var directive = {
            restrict: 'A',
            replace: false,
            scope: {
                handler: '='
            },
            link: link
        };

        return directive;

        function link(scope) {
            angular.element(document).on('keydown', _onKeyDown);
            angular.element(document).on('keyup', _onKeyUp);

            function _onKeyDown(event) {
                keyEventService.down(scope.handler, event.keyCode)
            }

            function _onKeyUp(event) {
                keyEventService.up(event.keyCode);
            }

            scope.$on('$destroy', function() {
                angular.element(document).off('keydown', _onKeyDown);
                angular.element(document).off('keyup', _onKeyUp);
            });
        }
    }
})();
