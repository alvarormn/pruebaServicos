'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl', function (myService, $scope) {
    $scope.data =  myService();
    console.log($scope.data.Nombres);
  });
