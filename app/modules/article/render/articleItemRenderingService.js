(function () {
    'use strict';

    angular.module('app.article').factory('articleItemRenderingService', articleItemRenderingService);

    /* @ngInject */
    function articleItemRenderingService(
        writeArticleSettings,
        headerRenderingService,
        paragraphRenderingService,
        videoRenderingService,
        audioRenderingService) {

        var service = {
            render: render
        };

        return service;

        function render(article, mode) {
            for (var i = 0, len = article.items.length; i < len; i++) {
                switch(article.items[i].category) {
                    case writeArticleSettings.itemCategories.header.key:
                        headerRenderingService.render(article, mode, i);
                        break;
                    case writeArticleSettings.itemCategories.paragraph.key:
                        paragraphRenderingService.render(article, mode, i);
                        break;
                    case writeArticleSettings.itemCategories.video.key:
                        videoRenderingService.render(article, mode, i);
                        break;
                    case writeArticleSettings.itemCategories.audio.key:
                        audioRenderingService.render(article, mode, i);
                        break;
                }
            }
        }
    }
})();
