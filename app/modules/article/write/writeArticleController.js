(function () {
    'use strict';

    angular.module('app.article').controller('WriteArticleController', WriteArticleController);

    /* @ngInject */
    function WriteArticleController(writeArticleSettings, writeArticleService) {
        var vm = this;

        vm.itemCategories = writeArticleSettings.itemCategories;
        vm.currentCategory = writeArticleService.currentCategory;
        vm.currentText = writeArticleService.currentText;
        vm.hints = writeArticleService.hints;
        vm.hint = writeArticleService.hint;

        vm.setCategory = setCategory;

        _init();

        function _init() {
            var hintEl = angular.element(document.getElementsByTagName('body')[0].querySelector('div#article-hint'));
            setTimeout(function() {
                hintEl.addClass('gry-showing');
            }, 1000);
        }

        function setCategory(category) {
            vm.currentCategory = category;
        }
    }
})();
