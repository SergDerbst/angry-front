(function () {
    'use strict';

    angular.module('app.keyCommands').factory('keyEventService', keyEventService);

    /* @ngInject */
    function keyEventService(keyCombinationHandlerService) {
        var _keyMap = {};

        var service = {
            down: down,
            up: up
        };

        return service;

        function down(handler, keyCode) {
            _keyMap[keyCode] = true;
            keyCombinationHandlerService.handle(handler, _keyMap);
        }

        function up(keyCode) {
            delete _keyMap[keyCode];
        }
    }
})();
