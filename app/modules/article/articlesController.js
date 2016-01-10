(function () {
    'use strict';

    angular.module('app.article').controller('ArticlesController', ArticlesController);

    /* @ngInject */
    function ArticlesController(articlesOperator) {
        var vm = this;

        vm.writeArticle = articlesOperator.writeArticle
    }
})();
