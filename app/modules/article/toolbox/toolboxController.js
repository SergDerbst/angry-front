(function () {
    'use strict';

    angular.module('app.article').controller('ToolboxController', ToolboxController);

    /* @ngInject */
    function ToolboxController(toolboxOperator) {
        var vm = this;

        vm.writeArticle = toolboxOperator.writeArticle;
    }
})();
