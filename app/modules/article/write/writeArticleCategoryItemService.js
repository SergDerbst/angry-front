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
                case writeArticleSettings.itemCategories.source.key:
                    _addSource(item);
                    break;
                case writeArticleSettings.itemCategories.image.key:
                    _addImage(item);
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

        function _addSource(item) {
            var source = {
                    author: '',
                    magazine: '',
                    page: '',
                    place: '',
                    publisher: '',
                    title: '',
                    year: '',
                    url: '',
                    article: ''
                },
                index = _findSourceIndex();

            _article.sources[index] = source;
            item.category = writeArticleSettings.itemCategories.source.key;
            item.data.index = index;
            console.log(item);
            _addItemToContainer(item);
        }

        function _findSourceIndex() {
            var counter = 0;

            for (var i = 0, len1 = _article.items.length; i < len1; i++) {
                if (_isContainerItemElement(i)) {
                    for (var j = 0, len2 = _article.items[i].data.length; j < len2; j++) {
                        if (_isSideNoteElement(i, j)) {
                            counter++;

                            if (_article.current.data === i) {
                                return counter;
                            }
                        }
                    }
                }
            }

            return counter;
        }

        function _isSideNoteElement(i, j) {
            return _article.items[i].data[j].category === writeArticleSettings.itemCategories.source.key;
        }

        function _isContainerItemElement(i) {
            return _article.items[i].category === writeArticleSettings.itemCategories.paragraph.key;
        }

        function _addImage(item) {
            item.category = writeArticleSettings.itemCategories.image.key;
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
