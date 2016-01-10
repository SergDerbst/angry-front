(function () {
    'use strict';

    angular.module('app.keyCommands').factory('keyCombinationHandlerService', keyCombinationHandlerService);

    /* @ngInject */
    function keyCombinationHandlerService(keyCodes) {
        var service = {
            handle: handle
        };

        return service;

        function handle(handler, keyMap) {
            var keys = Object.keys(keyMap);
            if(_isCommand(keys)) {
                handler.handle(_uncommandKeys(keys));
            }
        }

        function _isCommand(keys) {
            return keys.length > 2 &&
                keys.indexOf(keyCodes.ctrl) !== -1 &&
                keys.indexOf(keyCodes.shift) !== -1;
        }

        function _uncommandKeys(keys) {
            keys.splice(keys.indexOf(keyCodes.ctrl), 1);
            keys.splice(keys.indexOf(keyCodes.shift), 1);
            return keys;
        }
    }
})();
