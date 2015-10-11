(function() {
	'use strict';

	var module = angular.module('app.auth', ['app.modal', 'app.data']);

	module.config(interceptors);

	/* @ngInject */
	function interceptors($httpProvider) {
		$httpProvider.interceptors.push('authInterceptor');
	}
})();
