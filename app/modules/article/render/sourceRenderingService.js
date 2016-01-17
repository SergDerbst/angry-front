(function () {
    'use strict';

    angular.module('app.article').factory('sourceRenderingService', sourceRenderingService);

    /* @ngInject */
    function sourceRenderingService(articleRenderingDataService) {
        var service = {
            render: render
        };

        return service;

        function render(article, paragraph, data, mode, itemIndex, dataIndex) {
            var _hiding;

            if (data.text !== '') {
                var footnote = articleRenderingDataService.sup().addClass('gry-footnote').text(data.index);

                if(articleRenderingDataService.isCurrentItemElement(article.current, mode, itemIndex, dataIndex)) {
                    footnote.addClass(articleRenderingDataService.articleItemCurrentClass);
                }

                footnote.on('click', function() {

                });
            }

            paragraph.append(paragraph);
        }
    }
})();
