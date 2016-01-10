(function() {
	'use strict';

	angular.module('app.modal').factory('modalService', modalService);

	/* ngInject */
	function modalService($q, dynamicTemplateService) {
		var _bodyEl = angular.element(document.getElementsByTagName('body')[0]),
			deferred;

		var service = {
			openModal: openModal,
			closeModal: closeModal
		};

		return service;

		function openModal(templateUrl, scopeData) {
			deferred = $q.defer();
			scopeData.closeModal = closeModal;
			dynamicTemplateService.loadAndCompile(templateUrl, scopeData).then(function(template) {
				var modalRootEl = angular.element(document.createElement('div')).addClass('gry-modal');
				modalRootEl.append(template);
				_bodyEl.append(modalRootEl);
			});
			return deferred.promise;
		}

		function closeModal() {
			angular.element(_bodyEl[0].querySelector('div.gry-modal')).remove();
			deferred.resolve();
		}
	}
})();
