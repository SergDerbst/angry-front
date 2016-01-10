(function () {
    'use strict';

    angular.module('app.utils').directive('gryTooltip', tooltipDirective);

    /* @ngInject */
    function tooltipDirective($timeout, tooltipService) {
        return {
            restrict: 'A',
            replace: false,
            scope: {
                tooltipHeight: '@tooltipHeight'
            },
            link: link
        };

        function link(scope, element, attributes) {
            element.on('mouseover', _displayTooltip);
            element.on('mouseout', _hideTooltip);

            function _displayTooltip(event) {
                $timeout(function() {
                    tooltipService.showTooltip(attributes.gryTooltip, _mousePosition(event), element[0], parseInt(scope.tooltipHeight));
                }, 200);
            }

            function _hideTooltip() {
                tooltipService.hideTooltip();
            }

            function _mousePosition(e) {
                return { x: e.pageX, y: e.pageY };
            }
        }
    }
})();
