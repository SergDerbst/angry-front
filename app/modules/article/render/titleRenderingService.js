(function () {
    'use strict';

    angular.module('app.article').factory('titleRenderingService', titleRenderingService);

    /* @ngInject */
    function titleRenderingService(articleRenderingDataService) {
        var service = {
            render: render
        };

        return service;

        function render(article, mode) {
            var title = articleRenderingDataService.div().addClass(articleRenderingDataService.articleItemClass).addClass('gry-article-title');
            if (articleRenderingDataService.isCurrentElement(article.current, mode, 'title')) {
                title.addClass(articleRenderingDataService.articleItemCurrentClass);
            }
            title.append(articleRenderingDataService.header(1).text(article.title));
            articleRenderingDataService.articleElement().append(title);
        }
    }
})();
