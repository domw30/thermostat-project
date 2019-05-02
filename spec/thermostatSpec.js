'use strict';

describe('thermostat', function() {
var thermostat;
beforeEach(function() {
  thermostat = new Thermostat()
});
  it('starts at a default temperature of 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
  it('increases the temperatute with an up function', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(30);
  });
});
  
