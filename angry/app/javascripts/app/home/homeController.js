'use strict';

angular.module('angry').controller('HomeController', [
    '$scope',
    '$state',
    '$resource',
    function($scope, $state, $resource) {
        var actions = {
                articles: function() {
                    $scope.articles = true;
                    setTimeout(function() {
                        $state.go('go.articles');
                    }, 700);
                },
                signin: function() { console.log('sign in, bitch!') },
                about: function() {
                    $scope.about = true;
                },
                faq: function() { console.log('ask me, bitch!');}
            };
        $scope.toolTips = {
            articles: 'Read and explore',
            signin: 'Sign in or sign up',
            about: 'Find out more',
            faq: 'Frequently asked questions'
        };

        $resource('http://localhost:8080/home').get().$promise.then(
            function success(data) {
                $scope.data = data;
            }
        );

        $scope.home = function(action) {
            actions[action]();
        }
    }
]);