(function () {
    'use strict';

    angular.module('app.article').factory('keyCommandHandler', keyCommandHandler);

    /* @ngInject */
    function keyCommandHandler($injector, $rootScope, keyCodes, writeArticleSettings) {
        var _writeArticleOperator;

        var service = {
            handle: handle
        };

        return service;

        function handle(keys) {
            _writeArticleOperator = _writeArticleOperator || $injector.get('writeArticleOperator');

            switch(keys.length) {
                case 1:
                    _handleOneKeyCommands(keys);
                case 2:
                    _handleTwoKeyCommands(keys);
            }

            $rootScope.$digest();
        }

        function _handleOneKeyCommands(keys) {
            switch(keys[0]) {
                case keyCodes.enter:
                    _goToNextCategory();
                    break;
                case keyCodes.letter.a:
                    _writeArticleOperator.setCategory(writeArticleSettings.itemCategories.abstract.key);
                    break;
                case keyCodes.letter.f:
                    _writeArticleOperator.setCategory(writeArticleSettings.itemCategories.source.key);
                    break;
                case keyCodes.letter.h:
                    _writeArticleOperator.setCategory(writeArticleSettings.itemCategories.header.key);
                    break;
                case keyCodes.letter.i:
                    _writeArticleOperator.setCategory(writeArticleSettings.itemCategories.image.key);
                    break;
                case keyCodes.letter.n:
                    _writeArticleOperator.setCategory(writeArticleSettings.itemCategories.sidenote.key);
                    break;
                case keyCodes.letter.p:
                    _writeArticleOperator.setCategory(writeArticleSettings.itemCategories.paragraph.key);
                    break;
                case keyCodes.letter.s:
                    _writeArticleOperator.setCategory(writeArticleSettings.itemCategories.subtitle.key);
                    break;
                case keyCodes.letter.t:
                    _writeArticleOperator.setCategory(writeArticleSettings.itemCategories.title.key);
                    break;
                case keyCodes.letter.u:
                    _writeArticleOperator.setCategory(writeArticleSettings.itemCategories.audio.key);
                    break;
                case keyCodes.letter.v:
                    _writeArticleOperator.setCategory(writeArticleSettings.itemCategories.video.key);
                    break;
            }
        }

        function _handleTwoKeyCommands(keys) {
            if (keys[0] === keyCodes.alt) {
                //TODO arrow shitty pity
            }
        }

        function _goToNextCategory() {
            switch(_writeArticleOperator.current.category) {
                case writeArticleSettings.itemCategories.title.key:
                    _writeArticleOperator.setCategory(writeArticleSettings.itemCategories.subtitle.key);
                    break;
                case writeArticleSettings.itemCategories.subtitle.key:
                    _writeArticleOperator.setCategory(writeArticleSettings.itemCategories.abstract.key);
                    break;
                default:
                    _writeArticleOperator.setCategory(writeArticleSettings.itemCategories.paragraph.key);
                    break;
            }
        }
    }
})();
