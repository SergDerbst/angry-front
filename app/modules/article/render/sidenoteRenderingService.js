(function () {
    'use strict';

    angular.module('app.article').factory('sidenoteRenderingService', sidenoteRenderingService);

    /* @ngInject */
    function sidenoteRenderingService($rootScope, $timeout, articleRenderingDataService) {
        var service = {
            render: render
        };

        return service;

        function render(article, paragraph, data, mode, itemIndex, dataIndex) {
            var _hiding = null;

            if (data.text !== '') {
                var anchor = articleRenderingDataService.a().attr(articleRenderingDataService.href, data.url).attr(articleRenderingDataService.dataIndexAttributeName, dataIndex).text(data.text + ' ');

                if(articleRenderingDataService.isCurrentItemElement(article.current, mode, itemIndex, dataIndex)) {
                    anchor.addClass(articleRenderingDataService.articleItemCurrentClass);
                }

                anchor.on(articleRenderingDataService.mouseOver, function() {
                    if (_hiding !== null) {
                        $timeout.cancel(_hiding);
                    }

                    articleRenderingDataService.sidenoteElement().removeClass(articleRenderingDataService.showingClass);
                    articleRenderingDataService.sidenoteElement().removeClass(articleRenderingDataService.hidingClass);
                    articleRenderingDataService.sidenoteElement().addClass(articleRenderingDataService.showingClass);
                    article.current.data = dataIndex;
                    article.current.item = itemIndex;
                    $rootScope.$digest();
                });

                anchor.on(articleRenderingDataService.mouseOut, function() {
                    var sidenote = articleRenderingDataService.sidenoteElement();

                    sidenote.removeClass(articleRenderingDataService.showingClass);
                    sidenote.addClass(articleRenderingDataService.hidingClass);

                    _hiding = $timeout(function() {
                        article.current.data = 0;
                        article.current.item = 0;
                        $rootScope.$digest();
                        sidenote.removeClass(articleRenderingDataService.hidingClass);
                        _hiding = null;
                    }, 1000);
                });

                paragraph.append(anchor);
            }
        }
    }
})();
