(function() {
	'use strict';

	angular.module('app.auth').factory('authService', authService);

	/* ngInject */
	function authService($q, authResource, authStorage) {
		var service = {
			authenticate: authenticate,
			refreshAuthentication: refreshAuthentication,
			isAuthenticated: isAuthenticated
		};

		return service;

		function _setAuthentication(response) {
			authStorage.set('auth', {
				accessToken: response.accessToken,
				refreshToken: response.refreshToken
			});
		}

		function authenticate(authData) {
			var deferred = $q.defer();
			authResource.oauthToken(authData).$promise.then(function(response) {
				_setAuthentication(response);
				deferred.resolve(response);
			});
			return deferred.promise;
		}

		function refreshAuthentication() {
			var deferred = $q.defer();
			authResource.refreshToken({}, authStorage.get('auth')).$promise.then(function(response) {
				_setAuthentication(response);
				deferred.resolve(response);
			});
			return deferred.promise;
		}

		function isAuthenticated() {
			return authStorage.get('auth') && authStorage.get('auth').accessToken;
		}
	}
})();
