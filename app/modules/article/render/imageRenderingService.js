(function () {
    'use strict';

    angular.module('app.article').factory('imageRenderingService', imageRenderingService);

    /* @ngInject */
    function imageRenderingService(articleRenderingDataService) {
        var service = {
            render: render
        };

        return service;

        function render(article, paragraph, data, mode, itemIndex, dataIndex) {
            if (data.text !== '') {

            }
        }
    }
})();
