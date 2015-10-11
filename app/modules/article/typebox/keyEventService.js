(function () {
    'use strict';

    angular.module('app.article').factory('keyEventService', keyEventService);

    /* @ngInject */
    function keyEventService(articleItemService) {
        var _keyMap = {}

        var service = {
            init: init,
            down: down,
            up: up,
            input: input
        };

        return service;

        function init(element) {
            articleItemService.init(element);
        }

        function down(keyCode) {
            console.log('down: ' - keyCode);
        }

        function up(keyCode) {
            console.log('up: ' - keyCode);
        }

        function input(keyCode) {
            console.log('input: ' - keyCode);
        }
    }
})();
