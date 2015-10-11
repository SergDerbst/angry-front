(function() {
	'use strict';

	angular.module('app.auth').factory('authInterceptor', authInterceptor);

	/* @ngInject */
	function authInterceptor($q, $injector, authStorage) {
		var _modalService, _http, _authService;

		var service = {
			request: request,
			responseError: responseError
		};

		return service;

		function _setAuthService() {
			_authService = _authService || $injector.get('authService');
		}

		function _setModalService() {
			_modalService = _modalService || $injector.get('modalService');
		}

		function _setHttp() {
			_http = _http || $injector.get('$http');
		}

		function request(config) {
			_setHttp();
			var auth = authStorage.get('auth');
			if (auth) {
				_http.defaults.headers.common['Authorization'] = auth.accessToken;
			}
			return config;
		}

		function _resolveOriginalRequest(rejection, deferred) {
			_setHttp();
			_http(rejection.config).then(function(response) {
				deferred.resolve(response);
			});
		}

		function responseError(rejection) {
			var deferred = $q.defer();
			if (rejection.status === 401 && rejection.statusText === 'Unauthorized') {
				if (rejection.data.errorContext.error === 'access_token_expired') {
					_setAuthService();
					console.log('refresh the bitch');
					_authService.refreshAuthentication().then(function() {
						_resolveOriginalRequest(rejection, deferred);
					});
				} else {
					_setModalService();
					_modalService.openModal('templates/auth/login/loginModal.html', {}).then(function() {
						_resolveOriginalRequest(rejection, deferred);
					});
				}
			}
			return deferred.promise;
		}
	}
})();
