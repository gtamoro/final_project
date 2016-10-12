$(document).ready(start);

function start() {
  setupCalendar();
}

function setupCalendar() {
  $('#calendar').fullCalendar( {
    googleCalendarApiKey: 'AIzaSyDrDbVRFvaMZb5NuhZzVM-9rEk83NLQbo0',
    events: {
      googleCalendarId: 'kt78h7amqeqbhssu8roljo4udo@group.calendar.google.com'
    }
  });
}
