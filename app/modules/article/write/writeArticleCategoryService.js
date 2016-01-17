(function () {
    'use strict';

    angular.module('app.article').factory('writeArticleCategoryService', writeArticleCategoryService);

    /* @ngInject */
    function writeArticleCategoryService(writeArticleService, writeArticleSettings, writeArticleCategoryItemService, articleRenderingService, modalService) {
        var _missingCategoryTemplateUrl = 'templates/article/write/categoryMissingModal.html',
            _article = writeArticleService.article,
            _modal = true;

        var service = {
            current: {
                category: '',
                item: 0,
                data: 0
            },
            setCategory: setCategory,
            categoryDisabled: categoryDisabled
        };

        return service;

        function setCategory(category) {
            switch(category) {
                case writeArticleSettings.itemCategories.title.key:
                    _setTitleCategory(category);
                    break;
                case writeArticleSettings.itemCategories.subtitle.key:
                    _setSubtitleCategory(category);
                    break;
                case writeArticleSettings.itemCategories.abstract.key:
                    _setAbstractCategory(category);
                    break;
                default:
                    _setItemCategory(category);
                    break;
            }
            _article.current = service.current;
            articleRenderingService.render(_article, 'write');
        }

        function categoryDisabled(category) {
            switch(category) {
                case writeArticleSettings.itemCategories.title.key:
                    return false;
                case writeArticleSettings.itemCategories.subtitle.key:
                    return !(_hasTitle());
                case writeArticleSettings.itemCategories.abstract.key:
                    return !(_hasTitle() && _hasAbstract());
                case writeArticleSettings.itemCategories.header.key:
                case writeArticleSettings.itemCategories.paragraph.key:
                    return !(_hasTitle() && _hasSubtitle() && _hasAbstract());
                default:
                    return !(_hasTitle() && _hasSubtitle() && _hasAbstract() && _currentIsInContainerItem());
            }
        }

        function _setTitleCategory(category) {
            _article.title = _article.title || '';
            service.current.category = category;
        }

        function _setSubtitleCategory(category) {
            if (_hasTitle(_modal)) {
                _article.subtitle = _article.subtitle || '';
                service.current.category = category;
            }
        }

        function _setAbstractCategory(category) {
            if (_hasTitle(_modal) && _hasSubtitle(_modal)) {
                _article.abstract = _article.abstract || '';
                service.current.category = category;
            }
        }

        function _setItemCategory(category) {
            if (_hasTitle(_modal) && _hasSubtitle(_modal) && _hasAbstract(_modal)) {
                writeArticleCategoryItemService.addItem(category);
                service.current.category = category;
                service.current.item = _article.items.length - 1;
                service.current.data = _article.items[service.current.item].data.length - 1;
            }
        }

        function _hasTitle(modal) {
            return _hasCategory(writeArticleSettings.itemCategories.title.key, modal);
        }

        function _hasSubtitle(modal) {
            return _hasCategory(writeArticleSettings.itemCategories.subtitle.key, modal);
        }

        function _hasAbstract(modal) {
            return _hasCategory(writeArticleSettings.itemCategories.abstract.key, modal);
        }

        function _hasCategory(category, modal) {
            if (_article[category]) {
                return true;
            } else if (modal) {
                modalService.openModal(_missingCategoryTemplateUrl, { category: writeArticleSettings.itemCategories[category].key });
            } else {
                return false;
            }
        }

        function _currentIsInContainerItem() {
            return service.current.category === writeArticleSettings.itemCategories.paragraph.key ||
                service.current.category === writeArticleSettings.itemCategories.sidenote.key ||
                service.current.category === writeArticleSettings.itemCategories.source.key ||
                service.current.category === writeArticleSettings.itemCategories.image.key;
        }
    }
})();
