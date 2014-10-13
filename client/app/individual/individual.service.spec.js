'use strict';

describe('Service: individual', function () {

  // load the service's module
  beforeEach(module('personalEpoqueApp'));

  // instantiate service
  var individual;
  beforeEach(inject(function (_individual_) {
    individual = _individual_;
  }));

  it('should do something', function () {
    expect(!!individual).toBe(true);
  });

});
