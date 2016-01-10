(function () {
    'use strict';

    angular.module('app.article').factory('toolboxOperator', toolboxOperator);

    /* @ngInject */
    function toolboxOperator($state) {
        var service = {
            writeArticle: writeArticle
        };

        return service;

        function writeArticle() {
            //TODO check authenticated and permitted, redirect if not
            $state.go('gry.write.article');
        }
    }
})();
