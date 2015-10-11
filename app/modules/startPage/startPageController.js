(function () {
    'use strict';

    angular.module('app.startPage').controller('StartPageController', StartPageController);

    /* @ngInject */
    function StartPageController(startPageOperator) {
        var _toolTips = {
            articles: 'Read and explore',
            signin: 'Sign in or sign up',
            about: 'Find out more',
            faq: 'Frequently asked questions'
        };

        var vm = this;

        vm.toolTips = _toolTips;
        vm.data = startPageOperator.data;

        vm.goToArticles = startPageOperator.goToArticles;
        vm.goToSignin = startPageOperator.goToSignin;
        vm.goToAbout = startPageOperator.goToAbout;
        vm.goToFaq = startPageOperator.goToFaq;

        startPageOperator.init();
    }
})();