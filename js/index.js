$(document).ready(start);

function start() {
  $(document).scroll(changeNav);
}

function changeNav() {
  if($(window).scrollTop() === 0) {
    $("#navigation").toggleClass("notTop",false);
    $("#navigation").toggleClass("top", true);
  } else {
    $("#navigation").toggleClass("top",false);
    $("#navigation").toggleClass("notTop",true);
  }
}
