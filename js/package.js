
// SCROLLSPY
$(document).ready(function() {
  $(".nav-link").click(function() {
      var t = $(this).attr("href");
      $("html, body").animate({
          scrollTop: $(t).offset().top - 75
      }, {
          duration: 1000,
      });
      // $('body').scrollspy({ target: '.navbar',offset: $(t).offset().top });
      return false;
  });

window.onscroll = function() {scrollFunction()};
var element = document.getElementById("package-body");
var navbar = document.getElementById("navbar-package");
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      $(".navbar").addClass("fixed-top");
      element.classList.add("header-small-package");
      navbar.classList.remove("pb-5");
      $("body").addClass("body-top-padding");

  } else {
      $(".navbar").removeClass("fixed-top");
      element.classList.remove("header-small");
      $("body").removeClass("body-top-padding");
  }
}
 

  // AOS
  AOS.init({
    offset: 120, 
    delay: 200,
    duration: 2400, 
    easing: 'ease', 
    once: true, 
    mirror: false, 
    anchorPlacement: 'top-bottom', 
    disable: "mobile"
  });

  $('#navbarSupportedContent').on('hidden.bs.collapse', function () {
    $("body").removeClass("sidebar-open");
  })

  $('#navbarSupportedContent').on('shown.bs.collapse', function () {
    $("body").addClass("sidebar-open");
  })

  

  window.onresize = function() {
    var w = window.innerWidth;
    if(w>=992) {
      $('body').removeClass('sidebar-open');
      $('#navbarSupportedContent').removeClass('show');
    }
  }

  
});



//SIDEBAR-OPEN

