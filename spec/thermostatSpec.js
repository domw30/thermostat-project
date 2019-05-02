'use strict';

describe('thermostat', function() {
var thermostat;
beforeEach(function() {
  thermostat = new Thermostat()
});

    it('starts at a default temperature of 20 degrees', function() {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it('increases the temperature with an up function', function() {
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });

    it('decreases the temperature with a down function', function() {
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });

    it('has a minimum temperature of 10 degress', function() {
      for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });

    it('has a power saving mode on by default', function() {
      expect(thermostat.isPowerSaverMode()).toBe(true);
    });

    it('can switch off the power saving mode', function() {
      thermostat.isPowerSaverModeOff();
      expect(thermostat.isPowerSaverMode()).toBe(false);
    });

    it('can switch the power saver mode back on', function() {
      thermostat.isPowerSaverModeOn();
      expect(thermostat.isPowerSaverMode()).toBe(true);
    });

  describe('when in power saver mode', function() {
    it('in power saving mode maximum temperature is 25 degrees', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe('when not in power saver mode', function() {
    it('the maximum temperature is 32 degrees', function() {
      thermostat.isPowerSaverModeOff();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  describe('resets the thermostat', function() {
    it('sets the temperature to 20 degress', function() {
      thermostat.up();
      thermostat.reset();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe('can see the current energy usage', function() {
    describe('when the temperature is below 18 degrees', function() {
      it('is a low-usage', function() {
        for (var i = 0; i < 3; i++) {
          thermostat.down();
        }
        expect(thermostat.usage()).toEqual('low-usage');
      });
    });

    describe('when the temperature is 18 to 25 degrees', function() {
      it('is a medium-usage', function() {
        expect(thermostat.usage()).toEqual('medium-usage');
      });
    });

    describe('when the temperature is above 25 degrees', function() {
      it('is a high-usage', function() {
        thermostat.PowerSaverMode = false;
        for (var i = 0; i < 6; i++) {
          thermostat.up();
        }
        expect(thermostat.usage()).toEqual('high-usage');
      });
    });
  });
});
