(function () {
    'use strict';

    angular.module('app.article').factory('writeArticleCategoryItemService', writeArticleCategoryItemService);

    /* @ngInject */
    function writeArticleCategoryItemService(writeArticleSettings, writeArticleService) {
        var _article = writeArticleService.article,
            _itemDummy = {
                category: 'text',
                data: { text: '' }
            };

        var service = {
            addItem: addItem
        };

        return service;

        function addItem(category) {
            var item = angular.copy(_itemDummy);
            item.category = category;

            switch(item.category) {
                case writeArticleSettings.itemCategories.header.key:
                    _addHeaderItem(item);
                    break;
                case writeArticleSettings.itemCategories.paragraph.key:
                    _addContainerItem(item);
                    break;
                case writeArticleSettings.itemCategories.sidenote.key:
                    _addSideNote(item);
                    break;
                case writeArticleSettings.itemCategories.footnote.key:
                    _addFootNote(item);
                    break;
                case writeArticleSettings.itemCategories.image.key:
                    _addImage(item);
                    break;
                case writeArticleSettings.itemCategories.video.key:
                    _addVideo(item);
                    break;
                case writeArticleSettings.itemCategories.audio.key:
                    _addAudio(item);
                    break;
            }
        }

        function _addHeaderItem(item) {
            _article.items.push(item);
        }

        function _addContainerItem(item) {
            item.data = [];
            item.data.push(angular.copy(_itemDummy));
            _article.items.push(item);
        }

        function _addSideNote(item) {
            item.category = writeArticleSettings.itemCategories.sidenote.key;
            item.data.content = '';
            item.data.title = '';
            item.data.url = '';
            _addItemToContainer(item);
        }

        function _addFootNote(item) {
            item.category = writeArticleSettings.itemCategories.footnote.key;
            _addItemToContainer(item);
        }

        function _addImage(item) {
            item.category = writeArticleSettings.itemCategories.image.key;
            _addItemToContainer(item);
        }

        function _addVideo(item) {
            item.category = writeArticleSettings.itemCategories.video.key;
            _addItemToContainer(item);
        }

        function _addAudio(item) {
            item.category = writeArticleSettings.itemCategories.audio.key;
            _addItemToContainer(item);
        }

        function _addItemToContainer(item) {
            var container = _article.items[_article.current.item],
                lastItem = container.data[_article.current.data];

            if (lastItem.data.text === '') {
                container.data.pop();
            }

            container.data.push(item);
        }
    }
})();
