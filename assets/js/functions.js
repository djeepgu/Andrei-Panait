$( document ).ready(function() {

  // CREDITS
  $("#credit").on("click", function() {
    // if the credits are clicked
    if ($(this).hasClass("clicked")) {
      // add class to the popup
      $(".credits-popup").addClass("popout");
      // wait for css animation to happen before removing classes
      setTimeout(function(){
        $(".credits-popup").removeClass("popin");
      }, 300);

      $(this).removeClass("clicked");
    } else {
      $(".credits-popup").addClass("popin");
      $(".credits-popup").removeClass("popout");
      $(this).addClass("clicked");
    }
  });

  // OPEN / CLOSE MUSIC PLATFORMS
  $(".mixcloud").on("click", function() {

    var that = $(this);

    function openPlatform() {
      $(that).addClass("open");
      $(that).children(".content").addClass("open-content");
      setTimeout(function(){
        $(that).children(".content").addClass("show-content");
      }, 500);
      $(that).children(".content").removeClass("hide-content");
      $(that).children(".content").removeClass("close-content");
    }

    function closePlatform() {
      $(that).children(".content").addClass("hide-content");
      setTimeout(function(){
        $(that).children(".content").addClass("close-content");
        $(that).children(".content").removeClass("show-content");
        $(that).children(".content").removeClass("open-content");
        $(that).removeClass("open");
      }, 500);

    }

    if($(this).hasClass("open")) {
      closePlatform();
    } else {
      openPlatform();
    }
  });

  $(".soundcloud").on("click", function() {

    var that = $(this);

    function openPlatform() {
      $(that).addClass("open");
      $(that).children(".content").addClass("open-content");
      setTimeout(function(){
        $(that).children(".content").addClass("show-content");
      }, 500);
      $(that).children(".content").removeClass("hide-content");
      $(that).children(".content").removeClass("close-content");
    }

    function closePlatform() {
      $(that).children(".content").addClass("hide-content");
      setTimeout(function(){
        $(that).children(".content").addClass("close-content");
        $(that).children(".content").removeClass("show-content");
        $(that).children(".content").removeClass("open-content");
        $(that).removeClass("open");
      }, 500);
    }

    if($(this).hasClass("open")) {
      closePlatform();
    } else {
      openPlatform();
    }
  });

  $(".spotify").on("click", function() {

    var that = $(this);

    function openPlatform() {
      $(that).addClass("open");
      $(that).children(".content").addClass("open-content");
      setTimeout(function(){
        $(that).children(".content").addClass("show-content");
      }, 500);
      $(that).children(".content").removeClass("hide-content");
      $(that).children(".content").removeClass("close-content");
    }

    function closePlatform() {
      $(that).children(".content").addClass("hide-content");
      setTimeout(function(){
        $(that).children(".content").addClass("close-content");
        $(that).children(".content").removeClass("show-content");
        $(that).children(".content").removeClass("open-content");
        $(that).removeClass("open");
      }, 500);
    }

    if($(this).hasClass("open")) {
      closePlatform();
    } else {
      openPlatform();
    }
  });

  //
  
});
