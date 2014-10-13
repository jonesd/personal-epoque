'use strict';

angular.module('personalEpoqueApp')
  .controller('LifespanCtrl', function ($scope, individual) {
    $scope.message = 'Hello';

    $scope.lifespan = individual.getIndividual();
  });
