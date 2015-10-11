(function() {
	'use strict';

	angular.module('app.auth').factory('authStorage', authStorage);

	/* ngInject */
	function authStorage(store) {
		return store.getNamespacedStore('gry.auth');
	}
})();
