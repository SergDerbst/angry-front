'use strict';

angry.directive('gryTypebox', [
    function() {
        return {
            restrict: 'A',
            replace: false,
            link: function(scope, element) {
                var createItem = function(type) {
                        var item = document.createElement('div'),
                            itemEl = angular.element(item);
                        itemEl.addClass('gry-item-' + type);
                        articleEl.append(item);
                        return itemEl;
                    },
                    charCase = function(keycode) {
                        var char = String.fromCharCode(keycode);
                        return char == char.toUpperCase() ? char.toUpperCase() : char.toLowerCase();
                    },
                    charRemove = function(keyCode) {
                        var point = function() {
                                var start, end;
                                switch (keyCode) {
                                    case 8:
                                        end = element.prop('selectionEnd');
                                        start = end == element.prop('selectionStart') ? end - 1 : element.prop('selectionStart');
                                        break;
                                    case 46:
                                        start = element.prop('selectionStart');
                                        end = start == element.prop('selectionEnd') ? start + 1 : element.prop('selectionEnd');
                                        break;
                                }
                                return { start: start, end: end }
                            },
                            message = scope.currentItem.text(),
                            props = point();
                        scope.currentItem.text(message.replace(message.slice(props.start, props.end), ''));
                    },
                    articleEl = angular.element(document.getElementsByTagName('body')[0].querySelector('div#article'));
                element.on('keydown', function(event) {
                    if (scope.currentItem) {
                        switch (event.keyCode) {
                            case 8:
                                charRemove(event.keyCode);
                                break;
                            case 46:
                                charRemove(event.keyCode);
                                break;
                        }
                    }
                });
                element.on('keypress', function(event) {
                    if(!scope.currentItem) {
                        scope.currentItem = createItem(scope.currentCategory);
                    }
                    scope.currentItem.text(scope.currentItem.text() + charCase(event.keyCode));
                });
            }
        };
    }
]);