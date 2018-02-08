'use strict';

angular.module('myApp')
  .factory('appService', ['$http', '$q', '$log', '$injector', function ($http, $q, $log, $injector) {
    var service = {};
    //get UserProfile
    service.getUser = function (userName) {
      var deferred = $q.defer();
      var req = {
        method: 'GET',
        url: 'https://api.github.com/users/' + userName
      };
      $http(req)
        .then(function (success) {
          deferred.resolve(success);
        }, function (error) {
          deferred.reject(error);
        });
      return deferred.promise;
    };
    return service;
  }]);