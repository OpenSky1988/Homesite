$(function () {
  //Used to slide to a section on clicking a menu button
  var $root = $("html, body");
  var galleryElement = "<div class=\"project-wrap\"><div class=\"popup-project\"><div class=\"project-image\"></div><div class=\"project-header\"><div class=\"project-name\"></div><div class=\"project-skills\"></div></div><div class=\"project-description\"></div><div class=\"project-close-button\">Close</div></div></div>";
  
  function getScollbarWidth () {
    var scrollElement = document.createElement("div"); // Create element
    scrollElement.className = "scrollbar-element"; // Apply predefined style
    
    document.body.appendChild(scrollElement); // Add element to page
    var scrollbarWidth = scrollElement.offsetWidth - scrollElement.clientWidth; // Subtract width without scrollbar from width with scrollbar
    document.body.removeChild(scrollElement); // Remove element from page
    return scrollbarWidth;
  }
  
  function openProject(project) {
    var scrollbarWidth = getScollbarWidth();
    var windowWidth = parseInt($(window).width(), 10);
    
    if (windowWidth <= 1024) {
      $("#back-arrow").addClass("back-open");
      $(".header-wrap .container").css("padding-left", "0");
    }
    
    $("#gallery > .container").append(galleryElement);
    toggleProject(project);//Application of toggleProject() function
    
    $("#moving-header").css("width", "calc(100% - (20px + " + scrollbarWidth + "px))");
    $("body").css("margin-right", scrollbarWidth + "px");
    $("body").css("overflow", "hidden", "important");
  }
  
  function closeProject() {
    $(".project-wrap").remove();
    $("#moving-header").css("margin-right", "0px");
    $("body").css("margin-right", "0px");
    $("body").css("overflow", "auto");
    
    if ($("#back-arrow").is(":visible")) {
      $("#back-arrow").removeClass("back-open");
      $(".header-wrap .container").css("padding-left", "15px");
    }
  }
  
  //Show/hide mobile menu.
  function toggleMenu($speed) {
    $("#nav-trigger").toggleClass("is-open");
    $(".mobile-nav").slideToggle($speed, "swing");
    $(".body-shadow").fadeToggle();
  }
  
  //Show/hide gallery item description in a separate block over the main content of the page.
  function toggleProject(item) {
    var $item = $(item);
    
    if ($item.attr("id") === "p1") {
      $(".project-name").text("Project 1");
      $(".project-skills").text("Responsive Desing, UX, jQuery, HTML/CSS");
      $(".project-description").text("Coming soon...");
      $(".project-image").css("background-image", "url('/img/projects/p1-4000-(900).jpg')");
    } else if ($item.attr("id") === "p2") {
      $(".project-name").text("Project 2");
      $(".project-skills").text("Responsive Desing, UX, jQuery, HTML/CSS");
      $(".project-description").text("Coming soon...");
      $(".project-image").css("background-image", "url('/img/projects/p2-4000-(900).jpg')");
    } else if ($item.attr("id") === "p3") {
      $(".project-name").text("Project 3");
      $(".project-skills").text("Responsive Desing, UX, jQuery, HTML/CSS");
      $(".project-description").text("Coming soon...");
      $(".project-image").css("background-image", "url('/img/projects/p3-4000-(900).jpg')");
    } else if ($item.attr("id") === "p4") {
      $(".project-name").text("Project 4");
      $(".project-skills").text("Responsive Desing, UX, jQuery, HTML/CSS");
      $(".project-description").text("Coming soon...");
      $(".project-image").css("background-image", "url('/img/projects/p4-4000-(900).jpg')");
    } else if ($item.attr("id") === "p5") {
      $(".project-skills").text("Responsive Desing, UX, jQuery, HTML/CSS");
      $(".project-name").text("Project 5");
      $(".project-description").text("Coming soon...");
      $(".project-image").css("background-image", "url('/img/projects/p5-4000-(900).jpg')");
    } else if ($item.attr("id") === "p6") {
      $(".project-skills").text("Responsive Desing, UX, jQuery, HTML/CSS");
      $(".project-name").text("Project 6");
      $(".project-description").text("Coming soon...");
      $(".project-image").css("background-image", "url('/img/projects/p6-4000-(900).jpg')");
    }
  }
  
  //Checking the contact forms
  function formSubmit () {
    var email = $("#email").val();
    var name = $("#name").val();
    var text = $("#subject").val();
    
    if (email === "" && name === "" && text === "") {
      $(".error-notification").text("Please fill out the forms.");
      return false;
    } else if (email === "") {
      $(".error-notification").text("Please enter your email. This field is required.");
      return false;
    } else if (name === "") {
      $(".error-notification").text("Please enter your name. This field is required.");
      return false;
    } else if (text === "") {
      $(".error-notification").text("Please enter your text. This field is required.");
      return false;
    } else {
      $("#email").val("");
      $("#name").val("");
      $("#phone").val("");
      $("#subject").val("");
      $(".error-notification").text("Sorry. Service isn't working yet.");
      return false;
    }
  }
  
  // When gallery item is clicked
  $(".thumbnail").on("click", function () {
    openProject(this);
  });
  
  $("#back-arrow").on("click", closeProject);
  
  // When project is open
  $(document).on("click", ".project-wrap", function () {
    if (event.target === this) { // If event is triggered by this object, not its child...
      closeProject();
    }
  });
  
  $(document).on("click", ".project-close-button", closeProject);
  
  $(".project-button").on("click", function () {
    var scrollbarWidth = getScollbarWidth();
    var project = $(this).closest(".mobile-text").prev();
    
    $("#gallery > .container").append(galleryElement);
    toggleProject(project);//Application of toggleProject() function
    
    $("#moving-header").css("margin-right", scrollbarWidth + "px");
    $("body").css("margin-right", scrollbarWidth + "px");
    $("body").css("overflow", "hidden", "important");
  });
  
  //Open mobile meny if hamburger is clicked
  $("#nav-trigger").on("click", function () {
    toggleMenu(500);
  });
  
  //If menu item is chosen, close it
  $(".mobile-nav li").on("click", function () {
    toggleMenu(200);
  });
  
  //Close everything on clicking on the dark body wrapper
  $(".body-shadow").on("click", function () {
    $("#nav-trigger").removeClass("is-open");
    $(this).fadeOut();
    
    if ($(".mobile-nav").is(':visible')) {
      $(".mobile-nav").slideUp(200, "swing");
    }
  });
  
  //Slide to a section on click on a corresponding menu button
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    $root.animate({scrollTop: $($.attr(this, "href")).offset().top}, 500);
  });
  
  $(document).on("click", ".bt", function () {
    $(".project-wrap").remove();
    $("#moving-header").css("margin-right", "0px");
    $("body").css("margin-right", "0px");
    $("body").css("overflow", "auto");
  });
  
  $("form").submit(formSubmit);
  
});
