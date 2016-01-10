(function () {
    'use strict';

    var app = angular.module('app', [
        'ui.router',
        'ngResource',
        'angular-storage',
        'app.auth',
        'app.layout',
        'app.startPage',
        'app.article'
    ]);

    app.value('bodyElement', angular.element(document.getElementsByTagName('body')[0]));

    app.run(run);

    /* @ngInject */
    function run($http, $state, $rootScope, authService, authStorage) {
        if (authStorage.get('auth')) {
            $http.defaults.headers.common['Authorization'] = authStorage.get('auth').accessToken;
        }

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
            if (toState && toState.url !== '^' && toState.name !== 'modal.login') {
                $rootScope.toState = toState;
                $rootScope.toParams = toParams;
            }
            if(toState.data && toState.data.needsAuthentication && !authService.isAuthenticated()) {
                event.preventDefault();
                $state.go('modal.login');
            }
        });
    }
})();