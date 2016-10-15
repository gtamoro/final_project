$(document).ready(start);

function start() {
  setupCalendar();
}

function setupCalendar() {
  $('#calendar').fullCalendar( {
    googleCalendarApiKey: 'AIzaSyBTj_T3c8bnFq_awcTJ362dHCApossSNJQ',
    eventBackgroundColor: '#478CCC', eventBorderColor: '#478CCC',
    eventTextColor: 'white',
    events: {
      googleCalendarId: 'kt78h7amqeqbhssu8roljo4udo@group.calendar.google.com'
    }
  });
}
