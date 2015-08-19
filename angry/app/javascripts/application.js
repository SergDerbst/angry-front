(function () {
    'use strict';

    window.angry = angular.module('angry', ['ui.router', 'ngAnimate', 'ngResource', 'angular-storage']);

    angry.factory('authStorage', ['store', function(store) {
        return store.getNamespacedStore('auth');
    }]);

    angry.config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('home');

            $stateProvider
                .state('home', {
                    url: '/',
                    views: {
                        'main': {
                            templateUrl: '../templates/app/home/home.html',
                            controller: 'HomeController'
                        }
                    }
                })
                .state('go', {
                    abstract: true,
                    views: {
                        'main': {
                            templateUrl: 'templates/ui/layout.html'
                        }
                    }
                })
                .state('go.articles', {
                    url: '/articles',
                    views: {
                        'content': {
                            templateUrl: 'templates/app/articles/articles.html',
                            controller: 'ArticlesController'
                        }
                    }
                })
                .state('go.write', {
                    url: '/write',
                    abstract: true,
                    views: {
                        'content': {
                            templateUrl: 'templates/app/write/write.html'
                        }
                    }
                })
                .state('go.write.article', {
                    url: '/article',
                    views: {
                        'write': {
                            templateUrl: 'templates/app/write/article.html',
                            controller: 'WriteArticleController'
                        }
                    }
                })
                .state('modal', {
                    abstract: true,
                    views: {
                        'modal': {
                            templateUrl: 'templates/ui/modal.html'
                        }
                    }
                })
                .state('modal.login', {
                    url: '/login',
                    views: {
                        'modal.dialog': {
                            templateUrl: 'templates/auth/login.html',
                            controller: 'LoginController'
                        }
                    }
                });
        }
    ]);

    angry.run([
        '$http',
        '$state',
        '$rootScope',
        'authService',
        'authStorage',
        function($http, $state, $rootScope, authService, authStorage) {
            if (authStorage.get('auth')) {
                $http.defaults.headers.common['Authorization'] = authStorage.get('auth').accessToken;
            }

            $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
                if (toState && toState.url !== '^' && toState.name !== 'modal.login') {
                    $rootScope.toState = toState;
                    $rootScope.toParams = toParams;
                }
                if(toState.data && toState.data.needsAuthentication && !authService.isAuthenticated()) {
                    event.preventDefault();
                    $state.go('modal.login');
                }
            });
        }
    ]);
})();