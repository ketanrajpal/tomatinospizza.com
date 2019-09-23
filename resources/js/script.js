$(document).ready(function() {
  $('#slider ul').bxSlider({
    mode: 'fade',
    auto: true,
    pager: false
  });
});

var feed = new Instafeed({
  get: 'user',
  userId: '7999257000',
  clientId: '817e745f4c4447319616882e1c23a0f1',
  accessToken: '7999257000.817e745.92eb5c7c5f8844698dd367f475f64206',
  resolution: 'standard_resolution',
  sortBy: 'most-recent',
  limit: '12',
  template:
    '<a href="{{link}}" target="_blank"><div style="background-image:url({{image}})"></div></a>'
});
feed.run();

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(':focus')) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });
