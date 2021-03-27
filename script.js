var btn = $('#button');

$(window).scroll(function() {
if ($(window).scrollTop() > 300) {
btn.addClass('show');
} else {
 btn.removeClass('show');
 }
 });

 btn.on('click', function(e) {
 e.preventDefault();
$('html, body').animate({scrollTop:0}, '300');
 });




//  navbar



// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navTwo").style.top = "0";
  } else {
    document.getElementById("navTwo").style.top = "-100px";
  }
}

