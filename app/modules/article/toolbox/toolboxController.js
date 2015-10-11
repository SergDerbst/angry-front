(function () {
    'use strict';

    angular.module('app.article').controller('ToolboxController', ToolboxController);

    /* @ngInject */
    function ToolboxController($scope, $state) {
        var vm = this;

        vm.write = write;

        function write() {
            //TODO check authenticated and permitted, redirect if not
            $state.go('go.write.article');
        }
    }
})();
