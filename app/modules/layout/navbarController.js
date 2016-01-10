(function () {
    'use strict';

    angular.module('app.layout').controller('NavbarController', NavbarController);

    /* @ngInject */
    function NavbarController(navbarOperator) {
        var vm = this;

        vm.data = navbarOperator.data;
        vm.logout = navbarOperator.logout;
        vm.openNotifications = navbarOperator.openNotifications;
        vm.openSearch = navbarOperator.openSearch;
        vm.openSiteMenu = navbarOperator.openSiteMenu;
    }
})();
