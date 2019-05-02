'use strict';

function Thermostat(){
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.PowerSaverMode = true;
  this.MAXIMUM_TEMPERATURE = 32;
  this.POWERSAVE_MAX_TEMP = 25;
};

Thermostat.prototype.getCurrentTemperature = function(){ return this.temperature; };

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSaverMode() === false) {
  return this.temperature === this.MAXIMUM_TEMPERATURE;
  }
  return this.temperature === this.POWERSAVE_MAX_TEMP;
};

Thermostat.prototype.isPowerSaverMode = function() {
  return this.PowerSaverMode === true;
};

Thermostat.prototype.isPowerSaverModeOff = function() {
  return this.PowerSaverMode = false;
}

Thermostat.prototype.isPowerSaverModeOn = function() {
  return this.PowerSaverMode = true;
}


Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.down = function () {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.reset = function () {
  return this.temperature = 20;
};
