(function () {
    'use strict';

    angular.module('app.article').factory('renderArticleService', renderArticleService);

    /* @ngInject */
    function renderArticleService($rootScope, writeArticleSettings) {
        var _articleElement = angular.element(document.getElementsByTagName('body')[0].querySelector('div#gry-article')),
            _articleItemClass = 'gry-article-item',
            _dataIndexAttributeName = 'data-index',
            _sidenote = 'data-gry-sidenote',
            _href = 'href';

        var service = {
            render: render
        };

        return service;

        function render(article, mode) {
            _articleElement.empty();
            _renderTitle(article, mode);
            _renderSubtitle(article, mode);
            _renderAbstract(article, mode);
            _renderItems(article, mode);
        }

        function _renderTitle(article, mode) {
            var title = _div().addClass(_articleItemClass).addClass('gry-article-title');
            if (_isCurrent(article.current, mode, 'title')) {
                title.addClass('gry-current');
            }
            title.append(_header(1).text(article.title));
            _articleElement.append(title);
        }

        function _renderSubtitle(article, mode) {
            var subtitle = _div().addClass(_articleItemClass).addClass('gry-article-subtitle');
            if (_isCurrent(article.current, mode, 'subtitle')) {
                subtitle.addClass('gry-current');
            }
            subtitle.append(_header(2).text(article.subtitle));
            _articleElement.append(subtitle);
        }

        function _renderAbstract(article, mode) {
            var abstract = _div().addClass(_articleItemClass).addClass('gry-article-abstract');
            if (_isCurrent(article.current, mode, 'abstract')) {
                abstract.addClass('gry-current');
            }
            abstract.append(_span().text(article.abstract));
            _articleElement.append(abstract);
        }

        function _renderItems(article, mode) {
            for (var i = 0, len = article.items.length; i < len; i++) {
                switch(article.items[i].category) {
                    case writeArticleSettings.itemCategories.header.key:
                        _renderHeader(article, mode, i);
                        break;
                    case writeArticleSettings.itemCategories.paragraph.key:
                        _renderParagraph(article, mode, i);
                        break;
                }
            }
        }

        function _renderHeader(article, mode, index) {
            var header = _div().addClass(_articleItemClass).addClass('gry-article-header').attr(_dataIndexAttributeName, index);
            if (_isItem(article.current) && mode === 'write' && article.current.item === index) {
                header.addClass('gry-current');
            }
            header.append(_header(3).text(article.items[index].data.text));
            _articleElement.append(header);
        }

        function _renderParagraph(article, mode, index) {
            var wrapper = _div().addClass(_articleItemClass).addClass('gry-article-paragraph').attr(_dataIndexAttributeName, index),
                paragraph = _p();

            for (var i = 0, len = article.items[index].data.length; i < len; i++) {
                switch(article.items[index].data[i].category) {
                    case writeArticleSettings.itemCategories.text.key:
                        _renderText(article, paragraph, article.items[index].data[i].data, mode, index, i);
                        break;
                    case writeArticleSettings.itemCategories.sidenote.key:
                        _renderSideNote(article, paragraph, article.items[index].data[i].data, mode, index, i);
                        break;
                    case writeArticleSettings.itemCategories.footnote.key:
                        _renderFootNote(article, paragraph, article.items[index].data[i].data, mode, index, i);
                        break;
                    case writeArticleSettings.itemCategories.image.key:
                        _renderImage(article, paragraph, article.items[index].data[i].data, mode, index, i);
                        break;
                    case writeArticleSettings.itemCategories.video.key:
                        _renderVideo(article, paragraph, article.items[index].data[i].data, mode, index, i);
                        break;
                    case writeArticleSettings.itemCategories.audio.key:
                        _renderAudio(article, paragraph, article.items[index].data[i].data, mode, index, i);
                        break;
                }
            }

            wrapper.append(paragraph);
            _articleElement.append(wrapper);
        }

        function _renderText(article, paragraph, data, mode, itemIndex, dataIndex) {
            if (data.text !== '') {
                var text = _span().attr(_dataIndexAttributeName, dataIndex).text(data.text + ' ');
                if(_isCurrentItem(article.current, mode, itemIndex, dataIndex)) {
                    text.addClass('gry-current');
                }
                paragraph.append(text);
            }
        }

        function _renderSideNote(article, paragraph, data, mode, itemIndex, dataIndex) {
            if (data.text !== '') {
                var anchor = _a().attr(_href, data.url).attr(_dataIndexAttributeName, dataIndex).text(data.text + ' ');
                if(_isCurrentItem(article.current, mode, itemIndex, dataIndex)) {
                    anchor.addClass('gry-current');
                }
                anchor.on('mouseover', function() {
                    article.current.data = dataIndex;
                    article.current.item = itemIndex;
                    $rootScope.$digest();
                });
                anchor.on('mouseout', function() {
                    article.current.data = 0;
                    article.current.item = 0;
                    $rootScope.$digest();
                });
                paragraph.append(anchor);
            }
        }

        function _renderFootNote(article, paragraph, data, mode, itemIndex, dataIndex) {
            if (data.text !== '') {

            }
        }

        function _renderImage(article, paragraph, data, mode, itemIndex, dataIndex) {
            if (data.text !== '') {

            }
        }

        function _renderVideo(article, paragraph, data, mode, itemIndex, dataIndex) {
            if (data.text !== '') {

            }
        }

        function _renderAudio(article, paragraph, data, mode, itemIndex, dataIndex) {
            if (data.text !== '') {

            }
        }

        function _a() {
            return angular.element(document.createElement('a'));
        }

        function _div() {
            return angular.element(document.createElement('div'));
        }

        function _header(hierarchy) {
            return angular.element(document.createElement('h'+hierarchy));
        }

        function _p() {
            return angular.element(document.createElement('p'));
        }

        function _span() {
            return angular.element(document.createElement('span'));
        }

        function _isCurrent(current, mode, item) {
            return mode === 'write' && current.category === item;
        }

        function _isItem(current) {
            return current.category !== 'title' && current.category !== 'subtitle' && current.category !== 'abstract';
        }

        function _isCurrentItem(current, mode, itemIndex, dataIndex) {
            return _isItem(current) && mode === 'write' && current.item === itemIndex && current.data === dataIndex;
        }
    }
})();
