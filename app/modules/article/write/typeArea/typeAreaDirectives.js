(function () {
    'use strict';

    var module = angular.module('app.article');

    module.directive('gryItemTypeArea', gryItemTypeArea);
    module.directive('grySidenoteTypeArea', grySidenoteTypeArea);
    module.directive('grySourceTypeArea', grySourceTypeArea);
    module.directive('gryTitleTypeArea', gryTitleTypeArea);

    /* @ngInject */
    function gryItemTypeArea() {
        var directive = {
            restrict: 'A',
            replace: true,
            templateUrl: 'templates/article/write/typeArea/typeAreaItem.html'
        };

        return directive;
    }

    /* @ngInject */
    function grySidenoteTypeArea() {
        var directive = {
            restrict: 'A',
            replace: true,
            templateUrl: 'templates/article/write/typeArea/typeAreaSidenote.html'
        };

        return directive;
    }

    /* @ngInject */
    function grySourceTypeArea() {
        var directive = {
            restrict: 'A',
            replace: true,
            templateUrl: 'templates/article/write/typeArea/typeAreaSource.html'
        };

        return directive;
    }

    /* @ngInject */
    function gryTitleTypeArea() {
        var directive = {
            restrict: 'A',
            replace: true,
            templateUrl: 'templates/article/write/typeArea/typeAreaTitle.html'
        };

        return directive;
    }
})();
