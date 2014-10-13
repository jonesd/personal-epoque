'use strict';

angular.module('personalEpoqueApp')
  .service('individual', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var defaultIndividual = {
      age: 20,
      years: []
    };

    function addYears(ind, years, state) {
      for (var i = 0; i < years; i++) {
        ind.years.push(state);
      }
    }

    addYears(defaultIndividual, 5, 'child');
    addYears(defaultIndividual, 16, 'education');
    addYears(defaultIndividual, 43, 'work');
    addYears(defaultIndividual, 20, 'retirement');

    return {
      getIndividual: function() {
        return defaultIndividual;
      }

    };
  });
