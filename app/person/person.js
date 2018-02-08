'use strict';

angular.module('myApp.person', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/person/:personName', {
      templateUrl: 'person/person.html',
      controller: 'PersonCtrl'
    });
  }])

  .controller('PersonCtrl', ['$routeParams', 'appService', '$scope', '$location', function ($routeParams, appService, $scope , $location) {
    console.log($routeParams.personName);
    // appService.getUser($routeParams.personName).then(function (result) {
    //   console.log(result);
    // });

    $scope.goBack = function () {
    }
  }]);