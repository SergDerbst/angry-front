(function() {
	'use strict';

	angular.module('app.auth').controller('LoginController', LoginController);

	/* ngInject */
	function LoginController(authService, modalService) {
		var vm = this;

		vm.usernameOrEmail = '';
		vm.password = '';
		vm.hint = '';

		vm.submit = submit;
		vm.update = update;

		_generateHint(function(hint) {
			vm.hint = hint;
		});

		function _generateHint(callback) {
			if (vm.usernameOrEmail === '') {
				vm.hint = 'Enter username or password';
			} else if (vm.password === '') {
				vm.hint = 'Enter password';
			} else {
				return callback('');
			}
		}

		function update(callback) {
			callback = typeof callback !== 'undefined' ? callback : function(hint) {
				vm.hint = hint;
			};
			_generateHint(callback);
		}

		function submit(valid) {
			if (valid) {
				authService.authenticate({
					username: vm.usernameOrEmail,
					password: vm.password
				}).then(function() {
					modalService.closeModal();
				});
			}
		}
	}
})();
