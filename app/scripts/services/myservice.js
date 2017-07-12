'use strict';

/**
 * @ngdoc service
 * @name testApp.myService
 * @description
 * # myService
 * Service in the testApp.
 */
angular.module('testApp')
  .service('myService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return function() {
      return {Nombres: {
        name: 'Álvaro',
        lastName: 'Rodríguez'
        }
      };

    }


  });
