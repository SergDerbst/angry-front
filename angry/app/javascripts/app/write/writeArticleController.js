'use strict';

angry.controller('WriteArticleController', [
    '$scope',
    function($scope) {
        var hintEl = angular.element(document.getElementsByTagName('body')[0].querySelector('div#article-hint'));
        setTimeout(function() {
            hintEl.addClass('gry-showing');
        }, 1000);
        var hints = {
          category: function() {
              return 'Write a ' + $scope.currentCategory + ' or select another article item.';
          }
        };

        //TODO load from server (pre-load on login, if user has writing rights)
        $scope.article = {
            itemCategories: {
                title: { name: 'Title'},
                subtitle: { name: 'Subtitle'},
                abstract: { name: 'Abstract'},
                header: { name: 'Header'},
                paragraph: { name: 'Paragraph'},
                sidenote: { name: 'Side Note'},
                footnote: { name: 'Foot Note'},
                image: { name: 'Image'},
                video: { name: 'Video'},
                audio: { name: 'Audio'}
            }
        };
        $scope.currentCategory = 'title';
        $scope.category = function(category) {
            $scope.currentCategory = category;
        };
        $scope.hint = hints.category('title');
        $scope.$watch('currentCategory', function() {
            $scope.hint = hints.category();
        }, true);
    }
]);