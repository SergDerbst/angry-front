(function () {
    'use strict';

    angular.module('app.article').factory('videoRenderingService', videoRenderingService);

    /* @ngInject */
    function videoRenderingService(articleRenderingDataService) {
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
