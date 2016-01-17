(function () {
    'use strict';

    angular.module('app.article').factory('abstractRenderingService', abstractRenderingService);

    /* @ngInject */
    function abstractRenderingService(articleRenderingDataService) {
        var service = {
            render: render
        };

        return service;

        function render(article, mode) {
            var abstract = articleRenderingDataService.div().addClass(articleRenderingDataService.articleItemClass).addClass('gry-article-abstract');
            if (articleRenderingDataService.isCurrentElement(article.current, mode, 'abstract')) {
                abstract.addClass(articleRenderingDataService.articleItemCurrentClass);
            }
            abstract.append(articleRenderingDataService.span().text(article.abstract));
            articleRenderingDataService.articleElement().append(abstract);
        }
    }
})();
