'use strict';

angular.module('myApp.home', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl'
    });
  }])

  .controller('HomeCtrl', ['$scope', '$location' ,function ($scope, $location) {

    $scope.topFive = ['GrahamCampbell','fabpot','weierophinney','rkh','josh'];

    $scope.goPerson = function(item){
      $location.path('person/'+item);
    }
  }]);