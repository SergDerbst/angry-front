(function () {
    'use strict';

    angular.module('app.article').factory('headerRenderingService', headerRenderingService);

    /* @ngInject */
    function headerRenderingService(articleRenderingDataService) {
        var service = {
            render: render
        };

        return service;

        function render(article, mode, index) {
            var header = articleRenderingDataService.div().addClass(articleRenderingDataService.articleItemClass).addClass('gry-article-header').attr(articleRenderingDataService.dataIndexAttributeName, index);
            if (articleRenderingDataService.isItemElement(article.current) && mode === 'write' && article.current.item === index) {
                header.addClass(articleRenderingDataService.articleItemCurrentClass);
            }
            header.append(articleRenderingDataService.header(3).text(article.items[index].data.text));
            articleRenderingDataService.articleElement().append(header);
        }
    }
})();
