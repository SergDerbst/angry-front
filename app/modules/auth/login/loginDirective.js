(function() {
	'use strict';

	angular.module('app.auth').directive('gryLogin', loginDirective);

	/* ngInject */
	function loginDirective() {
		return {
			restrict: 'A',
			replace: true,
			templateUrl: 'templates/auth/login/loginDialog.html',
			controller: 'LoginController',
			controllerAs: 'login'
		};
	}
})();
