/*
/* Services */
angular
	.module('myApp')
	.factory('common', Common);

//dataSvc
function Common($http, $q, $log, $injector) {
	return {
		makeRequest: function (options) {
			var deferred = $q.defer();
			if (options.url.indexOf('http') !== 0) {
				options.url = 'http://192.168.1.100' + options.url;
			}

			$http(options)
				.then(function (success) {
					deferred.resolve(success);
				}, function (error) {});
			return deferred.promise;
		}
	}
};