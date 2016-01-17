(function () {
    'use strict';

    angular.module('app.article').factory('articleRenderingDataService', articleRenderingDataService);

    /* @ngInject */
    function articleRenderingDataService() {
        var _sidenoteElementSelector = 'div#gry-sidenote',
            _sidenoteElement,
            _articleElementSelector = 'div#gry-article',
            _articleElement;

        var service = {
            body: 'body',
            articleItemClass: 'gry-article-item',
            articleItemCurrentClass: 'gry-current',
            dataIndexAttributeName: 'data-index',
            showingClass: 'gry-showing',
            hidingClass: 'gry-hiding',
            mouseOver: 'mouseover',
            mouseOut: 'mouseout',
            href: 'href',
            write: 'write',
            articleElement: articleElement,
            sidenoteElement: sidenoteElement,
            a: a,
            div: div,
            header: header,
            p: p,
            span: span,
            sup: sup,
            isCurrentElement: isCurrentElement,
            isItemElement: isItemElement,
            isCurrentItemElement: isCurrentItemElement
        };

        return service;

        function sidenoteElement() {
            return _sidenoteElement || angular.element(document.getElementsByTagName(service.body)[0].querySelector(_sidenoteElementSelector));
        }

        function articleElement() {
            return _articleElement || angular.element(document.getElementsByTagName(service.body)[0].querySelector(_articleElementSelector));
        }

        function a() {
            return angular.element(document.createElement('a'));
        }

        function div() {
            return angular.element(document.createElement('div'));
        }

        function header(hierarchy) {
            return angular.element(document.createElement('h'+hierarchy));
        }

        function p() {
            return angular.element(document.createElement('p'));
        }

        function span() {
            return angular.element(document.createElement('span'));
        }

        function sup() {
            return angular.element(document.createElement('sup'));
        }

        function isCurrentElement(current, mode, item) {
            return mode === 'write' && current.category === item;
        }

        function isItemElement(current) {
            return current.category !== 'title' && current.category !== 'subtitle' && current.category !== 'abstract';
        }

        function isCurrentItemElement(current, mode, itemIndex, dataIndex) {
            return isItemElement(current) && mode === 'write' && current.item === itemIndex && current.data === dataIndex;
        }
    }
})();
