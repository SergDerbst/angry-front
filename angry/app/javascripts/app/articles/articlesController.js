'use strict';

angry.controller('ArticlesController', [
    '$scope',
    '$rootScope',
    function($scope, $rootScope) {
        var actions = {},
            background = function() {
                angular.element(document.getElementsByTagName('body')[0].querySelector('div.gry-background')).addClass('gry-grey');
            };

        background();
    }
]);