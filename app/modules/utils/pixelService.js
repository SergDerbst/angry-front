(function () {
    'use strict';

    angular.module('app.utils').factory('pixelService', pixelService);

    /* @ngInject */
    function pixelService(bodyElement) {
        var service = {
            boundingRectangle: boundingRectangle,
            horizontalCenter: horizontalCenter,
            verticalCenter: verticalCenter,
            height: height,
            width: width,
            overlapsLeft: overlapsLeft,
            overlapsTop: overlapsTop,
            overlapsRight: overlapsRight,
            overlapsBottom: overlapsBottom
        };

        return service;

        function boundingRectangle(element) {
            return _assureElement(element).getBoundingClientRect();
        }
        
        function horizontalCenter(element, rectangle) {
            rectangle = rectangle || boundingRectangle(element);
            return rectangle.right - Math.round(width(element)/2);
        }

        function verticalCenter(element, rectangle) {
            rectangle = rectangle || boundingRectangle(element);
            return rectangle.bottom - Math.round(height(element)/2);
        }

        function height(element, rectangle) {
            rectangle = rectangle || boundingRectangle(element);
            return rectangle.bottom - rectangle.top;
        }

        function width(element, rectangle) {
            rectangle = rectangle || boundingRectangle(element);
            return rectangle.right - rectangle.left;
        }

        function overlapsLeft(element, rectangle) {
            rectangle = rectangle || boundingRectangle(element);
            return rectangle.left < bodyElement[0].clientWidth;
        }

        function overlapsTop(element, rectangle) {
            rectangle = rectangle || boundingRectangle(element);
            return rectangle.top < bodyElement[0].clientHeight;
        }

        function overlapsRight(element, rectangle) {
            rectangle = rectangle || boundingRectangle(element);
            return rectangle.right > bodyElement[0].clientWidth;
        }

        function overlapsBottom(element, rectangle) {
            rectangle = rectangle || boundingRectangle(element);
            return rectangle.bottom > bodyElement[0].clientHeight;
        }

        function _assureElement(element) {
            return angular.isDefined(element.getBoundingClientRect) ? element : element[0];
        }
    }
})();
