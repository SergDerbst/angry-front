(function () {
    'use strict';

    angular.module('app.article').factory('articleItemService', articleItemService);

    /* @ngInject */
    function articleItemService() {
        var _articleElement = angular.element(document.getElementsByTagName('body')[0].querySelector('div#gry_article')),
            _currentParentElement = _articleElement,
            _numOfItems = 0;

        var service = {
            init: init,
            initItem: initItem,
            currentItem: -1,
            items: {}
        };

        return service;

        function initItem(category) {
            var item = document.createElement('div'),
                itemEl = angular.element(item);
            itemEl.addClass('gry-item-' + category);
            _currentParentElement.append(item);
            service.currentItem = _numOfItems;
            service.items[_numOfItems++] = { category: category };
        }
    }
})();
