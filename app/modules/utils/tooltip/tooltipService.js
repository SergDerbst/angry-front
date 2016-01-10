(function () {
    'use strict';

    angular.module('app.utils').factory('tooltipService', tooltipService);

    /* @ngInject */
    function tooltipService(pixelService) {
        var _bodyElement = angular.element(document.getElementsByTagName('body')[0]),
            _tooltipElement;

        var service = {
            showTooltip: showTooltip,
            hideTooltip: hideTooltip
        };

        return service;

        function showTooltip(text, mousePosition, element, tooltipHeight) {
            _assertTooltipElement();
            _tooltipElement.text(text);
            _tooltipElement.css(_css(mousePosition, element, tooltipHeight));
        }

        function hideTooltip() {
            _tooltipElement.text('');
            _tooltipElement.css({ 'display': 'none' });
        }

        function _assertTooltipElement() {
            if (!angular.isDefined(_tooltipElement)) {
                _tooltipElement = angular.element(document.createElement('div'));
                _tooltipElement.addClass('gry-tooltip');
                _bodyElement.prepend(_tooltipElement);
            }
        }

        function _css(mousePosition, element, tooltipHeight) {
            var horizonzalCenter = pixelService.horizontalCenter(element),
                verticalCenter = pixelService.verticalCenter(element),
                tooltipPosition = { x: horizonzalCenter+5, y: verticalCenter-5 };

            _adjustForMousePosition(mousePosition, tooltipPosition, tooltipHeight);

            return { 'top': (tooltipPosition.y)+'px', 'left': (tooltipPosition.x)+'px', 'display': 'block' };
        }

        function _adjustForMousePosition(mousePosition, tooltipPosition, tooltipHeight) {
            var verticalBottomDistance = (tooltipPosition.y + tooltipHeight) - mousePosition.y;

            if (verticalBottomDistance < 0) {
                tooltipPosition.y = tooltipPosition - (verticalBottomDistance-5);
            }
        }
    }
})();
