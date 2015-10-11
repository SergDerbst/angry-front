(function() {
	'use strict';

	angular.module('app.auth').factory('authResource', authResource);

	/* ngInject */
	function authResource($resource, apiUrl) {
		var _url = apiUrl.host + apiUrl.basePath + '/oauth/token';

		return $resource(_url, {}, {
			oauthToken: { method: 'POST', url: _url },
			refreshToken: { method: 'POST', url: _url + '/refresh' }
		});
	}
})();
