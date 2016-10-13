$(document).ready(start);

function start() {
  adjustSquarePanel();
  toggleNavOpacity();
  $(document).scroll(toggleNavOpacity);
  $(window).resize(adjustSquarePanel);
  $(".newsletter-form").submit(signUp);
}

// make the panels square
function adjustSquarePanel() {
  $('.panel').height($('.panel').width());
}

// make the navigation opaque when scrolling down, and solid when on top of screen.
function toggleNavOpacity() {
  if($(window).scrollTop() === 0) {
    $("#navigation").toggleClass("notTop",false);
    $("#navigation").toggleClass("top", true);
  } else {
    $("#navigation").toggleClass("top",false);
    $("#navigation").toggleClass("notTop",true);
  }
}

function signUp(event) {
  event.preventDefault();
}
