/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 *
 * Google CDN, Latest jQuery
 * To use the default WordPress version of jQuery, go to lib/config.php and
 * remove or comment out: add_theme_support('jquery-cdn');
 * ======================================================================== */

 (function($) {

// Use this variable to set up the common and page specific functions. If you
// rename this variable, you will also need to rename the namespace below.
var Roots = {
  // All pages
  common: {
    init: function() {
      // JavaScript to be fired on all pages

      $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });

      // if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
      //   var s = skrollr.init();
      // }

    }
  },
  // Home page
  home: {
    init: function() {
      // JavaScript to be fired on the home page

      $("button[data-dismiss=modal]").click(function(){
        $('#myModal iframe').attr("src", jQuery("#myModal iframe").attr("src"));
      });

      $("a[data-toggle=modal]").click(function(){
        $('#myModal iframe').vimeo("play");
      });

      $(".get-invited-btn").append("<span class='fui-triangle-down'></span>");
      $(".watch-video-btn").append("<span class='fui-triangle-right-large'></span>");

    }
  },
  // About us page, note the change from about-us to about_us.
  page_id_10: {
    init: function() {
      // JavaScript to be fired on the about us page
      var bio_link = $(".bio-link");
      bio_link.append("<span class='fui-triangle-down-small'></span>");
      bio_link.click(function(){
        $(this).parents(".team-member").children("p.bio").slideToggle();
      });
    }
  },
  // contact page, note the change from about-us to about_us.
  page_id_12: {
    init: function() {
      // JavaScript to be fired on the about us page

       $("a.phone").parent().prepend("<span class='fui-chat'></span> ");
       $("a.email").parent().prepend("<span class='fui-mail'></span> ");
       $("address").prepend("<span class='fui-location'></span> ");
    }
  }
};

// The routing fires all common scripts, followed by the page specific scripts.
// Add additional events for more control over timing e.g. a finalize event
var UTIL = {
  fire: function(func, funcname, args) {
    var namespace = Roots;
    funcname = (funcname === undefined) ? 'init' : funcname;
    if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
      namespace[func][funcname](args);
    }
  },
  loadEvents: function() {
    UTIL.fire('common');

    $.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
      UTIL.fire(classnm);
    });
  }
};

$(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
