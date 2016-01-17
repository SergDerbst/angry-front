(function () {
    'use strict';

    angular.module('app.article').factory('paragraphRenderingService', paragraphRenderingService);

    /* @ngInject */
    function paragraphRenderingService(
        writeArticleSettings,
        articleRenderingDataService,
        textRenderingService,
        sidenoteRenderingService,
        sourceRenderingService,
        imageRenderingService) {

        var service = {
            render: render
        };

        return service;

        function render(article, mode, index) {
            var wrapper = articleRenderingDataService.div().addClass(articleRenderingDataService.articleItemClass).addClass('gry-article-paragraph').attr(articleRenderingDataService.dataIndexAttributeName, index),
                paragraph = articleRenderingDataService.p();

            for (var i = 0, len = article.items[index].data.length; i < len; i++) {
                switch(article.items[index].data[i].category) {
                    case writeArticleSettings.itemCategories.text.key:
                        textRenderingService.render(article, paragraph, article.items[index].data[i].data, mode, index, i);
                        break;
                    case writeArticleSettings.itemCategories.sidenote.key:
                        sidenoteRenderingService.render(article, paragraph, article.items[index].data[i].data, mode, index, i);
                        break;
                    case writeArticleSettings.itemCategories.source.key:
                        sourceRenderingService.render(article, paragraph, article.items[index].data[i].data, mode, index, i);
                        break;
                    case writeArticleSettings.itemCategories.image.key:
                        imageRenderingService.render(article, paragraph, article.items[index].data[i].data, mode, index, i);
                        break;
                }
            }

            wrapper.append(paragraph);
            articleRenderingDataService.articleElement().append(wrapper);
        }
    }
})();
