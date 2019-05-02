'use strict';

function Thermostat(){
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.PowerSaverMode = true;
  // this.MAXIMUM_TEMPERATURE = 32;
  // this.POWERSAVE_MAX_TEMP = 25;
};

Thermostat.prototype.getCurrentTemperature = function(){ return this.temperature; };

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSaverMode = function() {
  return this.PowerSaverMode === true;
};

Thermostat.prototype.isPowerSaverModeOff = function() {
  return this.PowerSaverMode = false;
}

// Thermostat.prototype.isPowerSaveMaxTemp = function() {
//   return this.temperature === this.POWERSAVE_MAX_TEMP;
// };


Thermostat.prototype.up = function() {
  // if (this.isPowerSaveMaxTemp()) {
  //   return;
  // }
  this.temperature += 1;
};

Thermostat.prototype.down = function () {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
};
