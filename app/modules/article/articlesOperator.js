(function () {
    'use strict';

    angular.module('app.article').factory('articlesOperator', articlesOperator);

    /* @ngInject */
    function articlesOperator(dataService) {
        var _articles = dataService.data.articles;

        var service = {
            data: _articles
        };

        return service;
    }
})();
