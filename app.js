// Toggle scrolling effect on Navbar

$(function() {
  $(document).scroll(function() {
    let $nav = $("#mainNav");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

// Awesome new skills feature

(function() {
  var newSkills = $(".newSkills");
  var skillsIndex = -1;

  function showNextSkill() {
    ++skillsIndex;
    newSkills
      .eq(skillsIndex % newSkills.length)
      .fadeIn(1500)
      .delay(1500)
      .fadeOut(1500, showNextSkill);
  }

  showNextSkill();
})();
