(function() {
	'use strict';

	angular.module('app.utils').factory('valueStorage', valueStorage);

	/* ngInject */
	function valueStorage(store) {
		var _storage = store.getNamespacedStore('gry.value');

		var service = {
			put: put,
			pull: pull
		};

		return service;

		function put(key, value) {
			_storage.set(key, value);
			return value;
		}

		function pull(key) {
			return _storage.get(key);
		}
	}
})();
