(function () {
    'use strict';

    angular.module('app.article').factory('writeArticleSettings', writeArticleSettings);

    /* @ngInject */
    function writeArticleSettings() {
        var settings = {
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

        return settings;
    }
})();
