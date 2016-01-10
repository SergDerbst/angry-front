(function () {
    'use strict';

    angular.module('app.article').controller('WriteArticleController', WriteArticleController);

    /* @ngInject */
    function WriteArticleController(writeArticleSettings, writeArticleOperator) {
        var vm = this;

        vm.article = writeArticleOperator.article;
        vm.itemCategories = writeArticleSettings.itemCategories;
        vm.current = writeArticleOperator.current;
        vm.hints = writeArticleOperator.hints;
        vm.hint = writeArticleOperator.hint;
        vm.keyCommandHandler = writeArticleOperator.keyCommandHandler;

        vm.setCategory = writeArticleOperator.setCategory;
        vm.categoryDisabled = writeArticleOperator.categoryDisabled;

        vm.render = writeArticleOperator.render;

        writeArticleOperator.init();
    }
})();
