(function () {
    'use strict';

    angular.module('app.article').factory('footnoteOperator', footnoteOperator);

    /* @ngInject */
    function footnoteOperator(writeArticleService) {
        var _article = writeArticleService.article;

        var service = {
            data: _article.sources
        };

        return service;
    }
})();
