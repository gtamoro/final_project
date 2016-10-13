$(document).ready(start);

function start() {
  setupCalendar();
}

function setupCalendar() {
  $('#calendar').fullCalendar( {
    googleCalendarApiKey: 'AIzaSyBTj_T3c8bnFq_awcTJ362dHCApossSNJQ',
    events: {
      googleCalendarId: 'kt78h7amqeqbhssu8roljo4udo@group.calendar.google.com'
    }
  });
}
