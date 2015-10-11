(function() {
	'use strict';

	angular.module('app.utils').factory('valueStringConverter', valueStringConverter);

	/* ngInject */
	function valueStringConverter() {
		var service = {
			stringFromObjectKeys: stringFromObjectKeys

		};

		return service;

		function stringFromObjectKeys(object) {
			var value = '';

			for (var o in object) {
				if (o.indexOf('_') !== 0) {
					value = value + '|' + o;
				}
			}

			return value.substr(1);
		}
	}
})();
