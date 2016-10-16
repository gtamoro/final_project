$(document).ready(start);

function start() {
  adjustSquarePanel();
  toggleNavOpacity();
  $(document).scroll(toggleNavOpacity);
  $(window).resize(adjustSquarePanel);
  $(".newsletter-form").submit(signUp);
  $("#menuButton").click(displayMenu);
}

// make the panels square
function adjustSquarePanel() {
  $('.panel').height($('.panel').width());
}

// make the navBar opaque when scrolling down, and solid when on top of screen.
function toggleNavOpacity() {
  if($(window).scrollTop() === 0) {
    $("#navBar").toggleClass("notTop",false);
    $("#navBar").toggleClass("top", true);
  } else {
    $("#navBar").toggleClass("top",false);
    $("#navBar").toggleClass("notTop",true);
  }
}

function signUp(event) {
  event.preventDefault();
}

function displayMenu(event) {
  event.preventDefault();
  $("#menuList").slideToggle();
}
