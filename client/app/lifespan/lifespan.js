'use strict';

angular.module('personalEpoqueApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('lifespan', {
        url: '/lifespan',
        templateUrl: 'app/lifespan/lifespan.html',
        controller: 'LifespanCtrl'
      });
  });