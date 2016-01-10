(function () {
    'use strict';

    angular.module('app.article').factory('writeArticleOperator', writeArticleOperator);

    /* @ngInject */
    function writeArticleOperator(keyCommandHandler, writeArticleService, writeArticleCategoryService, renderArticleService) {
        var _article = writeArticleService.article;

        var service = {
            article: _article,
            init: init,
            keyCommandHandler: keyCommandHandler,
            current: writeArticleCategoryService.current,
            setCategory: writeArticleCategoryService.setCategory,
            categoryDisabled: writeArticleCategoryService.categoryDisabled,
            render: render
        };

        return service;

        function init() {
            writeArticleCategoryService.setCategory('title');
            render();
        }

        function render() {
            renderArticleService.render(_article, 'write');
        }
    }
})();
