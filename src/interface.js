$(function() {

  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click', function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').on('click', function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
   thermostat.reset();
   updateTemperature();
 });

 $('#powersaver-on').click(function() {
   thermostat.isPowerSaverModeOn();
   $('#power-saving-status').text('ON')
   updateTemperature();
 });

 $('#powersaver-off').click(function() {
   thermostat.isPowerSaverModeOff();
   $('#power-saving-status').text('OFF')
   updateTemperature();
 });

 function updateTemperature() {
   $('#temperature').text(thermostat.temperature);
 }

 function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.usage());
}

$.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
})

$('#current-city').change(function() {
  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp)
  })
})

});
