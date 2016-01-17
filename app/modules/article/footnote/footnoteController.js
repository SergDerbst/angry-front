(function () {
    'use strict';

    angular.module('app.article').controller('FootnoteController', FootnoteController);

    /* @ngInject */
    function FootnoteController(footnoteOperator) {
        var vm = this;

        vm.data = footnoteOperator.data;
    }
})();
