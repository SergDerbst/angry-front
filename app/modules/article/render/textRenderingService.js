(function () {
    'use strict';

    angular.module('app.article').factory('textRenderingService', textRenderingService);

    /* @ngInject */
    function textRenderingService(articleRenderingDataService) {
        var service = {
            render: render
        };

        return service;

        function render(article, paragraph, data, mode, itemIndex, dataIndex) {
            if (data.text !== '') {
                var text = articleRenderingDataService.span().attr(articleRenderingDataService.dataIndexAttributeName, dataIndex).text(data.text + ' ');
                if(articleRenderingDataService.isCurrentItemElement(article.current, mode, itemIndex, dataIndex)) {
                    text.addClass(articleRenderingDataService.articleItemCurrentClass);
                }
                paragraph.append(text);
            }
        }
    }
})();
