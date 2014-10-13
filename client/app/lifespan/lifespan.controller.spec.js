'use strict';

describe('Controller: LifespanCtrl', function () {

  // load the controller's module
  beforeEach(module('personalEpoqueApp'));

  var LifespanCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LifespanCtrl = $controller('LifespanCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
