(function () {
    'use strict';

    angular.module('app.data').factory('dataService', dataService);

    /* @ngInject */
    function dataService() {
        var _data = {
            startPage: {
                _about: false,
                _articles: false
            }
        };

        var service = {
            data: _data,
            assignAndResolve: assignAndResolve
        };

        return service;

        function assignAndResolve(response, target, deferred) {
            angular.forEach(response, function(value, key) {
                if (key.indexOf('$') !== 0) {
                    target[key] = value;
                }
            });
            if (angular.isDefined(deferred)) {
                deferred.resolve(response);
            }
        }
    }
})();
