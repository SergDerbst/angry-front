(function () {
    'use strict';

    angular.module('app.layout').controller('NavbarController', NavbarController);

    /* @ngInject */
    function NavbarController() {
        var vm = this;

        vm.logout = logout;
        vm.openNotifications = openNotifications;
        vm.openSiteMenu = openSiteMenu;
        vm.openSearch = openSearch;

        function logout() {
            console.log('logout, bitch!');
        }

        function openNotifications() {
            console.log('notify, bitch!');
        }

        function openSiteMenu() {
            console.log('site, bitch!');
        }

        function openSearch() {
            console.log('search, bitch!');
        }
    }
})();
