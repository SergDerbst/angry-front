(function () {
    'use strict';

    angular.module('app.article').factory('writeArticleService', writeArticleService);

    /* @ngInject */
    function writeArticleService() {
        var lorem = 'Verdächtig werden weiterhin vorwiegend junge Männer "aus nordafrikanischen Ländern", berichtet die Polizei. "Größtenteils handelt es sich um Asylsuchende und Personen, die sich illegal in Deutschland aufhalten." Offenbar können die Verdächtigen, auch wenn sie beispielsweise mit entwendeten Handys aufgespürt wurden, nur schwer mit konkreten Straftaten in der Silvesternacht verbunden werden.';
        var _article = {
            id: null,
            published: false,
            sources: {
                types: ['book', 'print', 'article', 'link'],
                _currentType: '0'
            },
            items: [
                {
                    category: 'paragraph',
                    data: [{
                        category: 'text',
                        data: { text: lorem }
                    }]
                },
                {
                    category: 'header',
                    data: { text: 'Ich bin ein Kopf im Text' }
                },
                {
                    category: 'paragraph',
                    data: [
                        {
                            category: 'text',
                            data: { text: lorem }
                        },
                        {
                            category: 'sidenote',
                            data: {
                                title: 'Ich bin eine Sidenote',
                                url: '/article/666',
                                text: 'Bumschakalakka!',
                                content: lorem
                            }
                        },
                        {
                            category: 'text',
                            data: { text: lorem }
                        }
                    ]
                }
            ],
            title: 'Ich bin ein echt toller und besonders aussagekräftiger Titel',
            subtitle: 'Und ich untertitel das auch noch',
            abstract: lorem
        };

        var service = {
            article: _article
        };

        return service;
    }
})();
