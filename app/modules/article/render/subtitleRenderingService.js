(function () {
    'use strict';

    angular.module('app.article').factory('subtitleRenderingService', subtitleRenderingService);

    /* @ngInject */
    function subtitleRenderingService(articleRenderingDataService) {
        var service = {
            render: render
        };

        return service;

        function render(article, mode) {
            var subtitle = articleRenderingDataService.div().addClass(articleRenderingDataService.articleItemClass).addClass('gry-article-subtitle');
            if (articleRenderingDataService.isCurrentElement(article.current, mode, 'subtitle')) {
                subtitle.addClass(articleRenderingDataService.articleItemCurrentClass);
            }
            subtitle.append(articleRenderingDataService.header(2).text(article.subtitle));
            articleRenderingDataService.articleElement().append(subtitle);
        }
    }
})();
