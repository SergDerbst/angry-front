(function () {
    'use strict';

    angular.module('app.article').factory('writeArticleSettings', writeArticleSettings);

    /* @ngInject */
    function writeArticleSettings() {
        var settings = {
            itemCategories: {
                title: { name: 'Title', key: 'title' },
                subtitle: { name: 'Subtitle', key: 'subtitle' },
                abstract: { name: 'Abstract', key: 'abstract' },
                header: { name: 'Header', key: 'header' },
                paragraph: { name: 'Paragraph', key: 'paragraph' },
                text: { name: 'Text', key: 'text' },
                sidenote: { name: 'Side Note', key: 'sidenote' },
                source: { name: 'Source', key: 'source' },
                image: { name: 'Image', key: 'image' },
                video: { name: 'Video', key: 'video' },
                audio: { name: 'Audio', key: 'audio' }
            }
        };

        return settings;
    }
})();
