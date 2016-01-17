(function () {
    'use strict';

    angular.module('app.article').factory('articleRenderingService', articleRenderingService);

    /* @ngInject */
    function articleRenderingService(
        articleRenderingDataService,
        titleRenderingService,
        subtitleRenderingService,
        abstractRenderingService,
        articleItemRenderingService) {

        var service = {
            render: render
        };

        return service;

        function render(article, mode) {
            articleRenderingDataService.articleElement().empty();
            titleRenderingService.render(article, mode);
            subtitleRenderingService.render(article, mode);
            abstractRenderingService.render(article, mode);
            articleItemRenderingService.render(article, mode);
        }
    }
})();
