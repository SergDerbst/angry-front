(function () {
    'use strict';

    angular.module('app').config(routes);

    /* @ngInject */
    function routes($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    'main': {
                        templateUrl: 'templates/startPage/startPage.html',
                        controller: 'StartPageController',
                        controllerAs: 'startPage'
                    }
                }
            })
            .state('gry', {
                abstract: true,
                views: {
                    'main': {
                        templateUrl: 'templates/layout/layout.html'
                    }
                }
            })
            .state('gry.articles', {
                url: '/articles',
                views: {
                    'content': {
                        templateUrl: 'templates/article/articles.html',
                        controller: 'ArticlesController',
                        controllerAs: 'articles'
                    }
                }
            })
            .state('gry.write', {
                url: '/write',
                abstract: true,
                views: {
                    'content': {
                        templateUrl: 'templates/article/write/write.html'
                    }
                }
            })
            .state('gry.write.article', {
                url: '/article',
                views: {
                    'write': {
                        templateUrl: 'templates/article/write/article.html',
                        controller: 'WriteArticleController',
                        controllerAs: 'writeArticle'
                    }
                }
            })
            .state('modal', {
                abstract: true,
                views: {
                    'modal': {
                        templateUrl: 'templates/templates/ui/modal.html'
                    }
                }
            });

        $urlRouterProvider.otherwise('home');
    }
})();
