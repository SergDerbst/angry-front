(function () {
    'use strict';

    angular.module('app.article').controller('SidenoteController', SidenoteController);

    /* @ngInject */
    function SidenoteController(sidenoteOperator) {
        var vm = this;

        vm.article = sidenoteOperator.article;
    }
})();
