(function () {
    'use strict';

    angular.module('app.startPage').factory('startPageOperator', startPageOperator);

    /* @ngInject */
    function startPageOperator($q, $state, $resource, dataService) {
        var _startPage = dataService.data.startPage;

        var service = {
            init: init,
            goToArticles: goToArticles,
            goToSignin: goToSignin,
            goToAbout: goToAbout,
            goToFaq: goToFaq,
            data: _startPage
        };

        return service;

        function init() {
            var deferred = $q.defer();

            $resource('http://localhost:8080/home').get().$promise.then(function(response) {
                dataService.assignAndResolve(response, _startPage, deferred);
            });

            return deferred.promise;
        }

        function goToArticles() {
            console.log('pupenwurst');
            _startPage._articles = true;
            setTimeout(function () {
                $state.go('gry.articles');
            }, 700);
        }

        function goToSignin() {
            console.log('sign in, bitch!');
        }

        function goToAbout() {
            _startPage._about = true;
        }

        function goToFaq() {
            console.log('ask me, bitch!');
        }
    }
})();
