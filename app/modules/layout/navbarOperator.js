(function () {
    'use strict';

    angular.module('app.layout').factory('navbarOperator', navbarOperator);

    /* @ngInject */
    function navbarOperator(dataService) {
        var _navbar = dataService.data.layout.navbar;

        var service = {
            data: _navbar,
            logout: logout,
            openNotifications: openNotifications,
            openSearch: openSearch,
            openSiteMenut: openSiteMenu
        };

        return service;

        function logout() {
            console.log('logout, bitch!');
        }

        function openNotifications() {
            console.log('notify, bitch!');
        }

        function openSearch() {
            console.log('search, bitch!');
        }

        function openSiteMenu() {
            console.log('site, bitch!');
        }
    }
})();
