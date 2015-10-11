(function () {
    'use strict';

    angular.module('app.article').directive('articleDirective', articleDirective);

    /* @ngInject */
    function articleDirective() {
        var directive = {
            restrict: 'A',
            templateUrl: 'templates/article/article.html',
            controller: 'ArticleController',
            controllerAs: 'article',
            scope: {
                id: '@?',
                owner: '@',
                purpose: '='
            },
            link: link
        };

        return directive;

        function link() {

        }
    }
})();
