(function () {
    'use strict';

    angular.module('app.article').factory('writeArticleService', writeArticleService);

    /* @ngInject */
    function writeArticleService() {

        var service = {
            currentCategory: {},
            currentText: '',
            hints: _hints(),
            hint: ''
        };

        return service;

        function _hints() {
            return {
                category: function () {
                    return 'Write a ' + service.currentCategory + ' or select another article item.';
                }
            };
        }
    }
})();
