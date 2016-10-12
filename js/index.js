$(document).ready(start);

function start() {
  $(document).scroll(changeNav);
}

function changeNav() {
  if($(window).scrollTop() === 0) {
    $("#navigation").css('background-color','black');
  } else {
    $("#navigation").css('background-color','rgba(0,0,0,0.5');
  }
}
