(function() {
	'use strict';

	angular.module('app.utils').factory('dynamicTemplateService', dynamicTemplateService);

	/* ngInject */
	function dynamicTemplateService($q, $http, $compile, $rootScope, $templateCache) {
		var service = {
			loadAndCompile: loadAndCompile
		};

		return service;

		function _createScope(scopeData) {
			var scope = $rootScope.$new();

			for (var s in scopeData) {
				scope[s] = scopeData[s];
			}

			return scope;
		}

		function _fetchTemplate(templateUrl, scopeData) {
			var deferred = $q.defer();

			$http.get(templateUrl, {cache: $templateCache}).then(function(response) {
				deferred.resolve($compile(angular.element(response.data))(_createScope(scopeData)));
			});

			return deferred.promise;
		}

		function loadAndCompile(templateUrl, scopeData) {
			var deferred = $q.defer();

			_fetchTemplate(templateUrl, scopeData).then(function(template) {
				deferred.resolve(template);
			});

			return deferred.promise;
		}
	}
})();
