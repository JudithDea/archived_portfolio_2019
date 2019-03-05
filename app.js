// Toggle scrolling effect on Navbar

$(function() {
  $(document).scroll(function() {
    let $nav = $("#mainNav");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
