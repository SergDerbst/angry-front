(function() {
	'use strict';

	var utils = angular.module('app.utils');

	utils.filter('momentFormat', momentFormat);
	utils.filter('momentFromNow', momentFromNow);
	utils.filter('momentTimezone', momentTimezone);
	utils.filter('momentDuration', momentDuration);

	/* @ngInject */
	function momentFormat(moment) {
		return function(date, format) {
			var s = moment(date).format(format);
			if (date === null || s === null || typeof s === 'undefined') {
				return '';
			}
			return s;
		};
	}

	/* @ngInject */
	function momentFromNow(moment) {
		return function(date) {
			if (date === null) {
				return '';
			}
			return moment(date).fromNow();
		};
	}

	/* @ngInject */
	function momentTimezone(moment) {
		return function(date, timezone, format) {
			if (date === null) {
				return '';
			}
			return moment(date).tz(timezone).format(format);
		};
	}

	/* @ngInject */
	function momentDuration(moment) {
		return function(duration) {
			if (duration === null) {
				return '';
			}
			return moment.duration(parseInt(duration)).humanize();
		};
	}
})();
