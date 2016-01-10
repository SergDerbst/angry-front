(function () {
    'use strict';

    angular.module('app.article').factory('sidenoteOperator', sidenoteOperator);

    /* @ngInject */
    function sidenoteOperator(writeArticleService) {
        var _article = writeArticleService.article;

        var service = {
            article: _article
        };

        return service;
    }
})();
