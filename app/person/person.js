'use strict';

angular.module('myApp.person', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/person/:personName', {
      templateUrl: 'person/person.html',
      controller: 'PersonCtrl'
    });
  }])

  .controller('PersonCtrl', ['$routeParams', 'appService', '$scope', '$location', function ($routeParams, appService, $scope , $location) {
    $scope.infoPerson = {};
    appService.getUser($routeParams.personName).then(function (result) {
      $scope.infoPerson = result.data;
      console.log($scope.infoPerson);
    });

    $scope.goBack = function () {
      $location.path('home');
    }
  }]);