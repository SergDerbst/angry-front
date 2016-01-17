(function () {
    'use strict';

    angular.module('app.article').factory('audioRenderingService', audioRenderingService);

    /* @ngInject */
    function audioRenderingService(articleRenderingDataService) {
        var service = {
            render: render
        };

        return service;

        function render(article, mode, index) {
            if (data.text !== '') {

            }
        }
    }
})();
