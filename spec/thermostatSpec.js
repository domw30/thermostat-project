'use strict';

describe('thermostat', function() {
var thermostat;
beforeEach(function() {
  thermostat = new Thermostat()
});
  it('starts at a default temperature of 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20)
  });
});
