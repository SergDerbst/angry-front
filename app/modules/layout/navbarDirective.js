'use strict';

angular.module('app.layout').directive('gryNavbar', [
    function() {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'templates/layout/navbar.html',
            controller: 'NavbarController',
            controllerAs: 'navbar'
        };
    }
]);