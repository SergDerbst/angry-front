(function() {
	'use strict';

	var app = angular.module('app.data', []);

	app.constant('apiUrl', {
		host: '{{apiUrl}}',
		basePath: ''
	});
})();
