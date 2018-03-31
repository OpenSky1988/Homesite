$(function () {
  // Variables
  var $root = $("html, body");
  var articleBlock = "<div class=\"article-wrap\"><div class=\"popup-article\"><div class=\"article-image\"></div><div class=\"content\"><div class=\"article-header\"></div><div class=\"article-date\"></div><div class=\"article-content\"></div><div class=\"article-navigation\"><div id=\"back\" class=\"view-button\">← Back</div><div id=\"next\" class=\"view-button\">Next →</div></div></div></div></div>"
  var numberOfArticles = $(".article-prev").length;
  var id = 0;
  
  // Functions
  function toggleMenu($speed) {
    $("#nav-trigger").toggleClass("is-open");
    $(".mobile-nav").slideToggle($speed, "swing");
    $(".body-shadow").fadeToggle();
  }
  
  function getScollbarWidth() {
    var scrollElement = document.createElement("div");
    scrollElement.className = "scrollbar-element";
    
    document.body.appendChild(scrollElement);
    var scrollbarWidth = scrollElement.offsetWidth - scrollElement.clientWidth;
    document.body.removeChild(scrollElement);
    return scrollbarWidth;
  }
  
  function next() {
    if (id <= $(".article-prev").length) {
      id = Number(id) + 1;
      articleToggle(id);
    }
  };
  
  function back() {    
    if (id > 0) {
      id = Number(id) - 1;
      articleToggle(id);
    }
  };
  
  function checkOrder() {
    $(".article-navigation .view-button").removeClass("button-inactive");
    
    if (id >= $(".article-prev").length) {
      $("#next").addClass("button-inactive");
    } else if (id <= 1) {
      $("#back").addClass("button-inactive");
    } else if (id >= $(".article-prev").length && id <= 1) {
      $("#next").addClass("button-inactive");
      $("#back").addClass("button-inactive");
    }
  }
  
  function articleId(article) {
    var articleIdNumber = $(article).prop("id").replace(/\D/g,'');
    
    return articleIdNumber;
  }
  
  function articleOpen(article) {
    var scrollbarWidth = getScollbarWidth();
    var windowWidth = parseInt($(window).width(), 10);
    
    if (windowWidth <= 1024) {
      $("#back-arrow").addClass("back-open");
      $(".header-wrap .container").css("padding-left", "0");
    }
    
    $("#cont").append(articleBlock);
    var $article = $(article);
    id = articleId($article);
    articleToggle(id);
    $("#moving-header").css("width", "calc(100% - (20px + " + scrollbarWidth + "px))");
    $("body").css("margin-right", scrollbarWidth + "px");
    $("body").css("overflow", "hidden", "important");
  }
  
  function articleClose() {
    $(".article-wrap").remove();
    $("#moving-header").css("margin-right", "0px");
    $("body").css("margin-right", "0px");
    $("body").css("overflow", "auto");
    
    if ($("#back-arrow").is(":visible")) {
      $("#back-arrow").removeClass("back-open");
      $(".header-wrap .container").css("padding-left", "15px");
    }
  }
  
  function articleThumb(event) {
    if($(".popup-article").length) {
      if (event.which === 39) {
        next();
      } else if (event.which === 37) {
        back();
      } else if (event.which === 27) {
        articleClose();
      }
    }
  }
  
  function articleToggle(id) {
    checkOrder();
    
    if (id == 1) {
      $(".article-header").text("What caused my career change?");
      $(".article-date").text("12 April, 2017");
      $(".article-content").html("<p>Most people are told what to do and where to go, for example, by the loved ones. But even the closest people cannot fully understand our own way. Nobody can, but us. Therefore, it is our mission to find and persuade it.</p><p>So, this is how it happened with me. A few years ago I and my best friend studied programming. We had been doing it for a couple of years if I'm not mistaking, and the language was pure C++. It seemed pretty interesting to me as a process - you plan your idea, write it on your screen, the computer reads it and rewards you with the result. Oh, boy! The result seemed so sweet. It was totally worth the whole struggle. However, my problem was that I didn't see any purpose in front of me.</p><p>As everything was becoming more and more difficult, I was losing my enthusiasm. And at that moment I still wasn't able to build even a basic applications (pure C++, remember?). Finally, I left it, but over time I noticed that I am still somehow attached to the coding. Thoughts about continuing studying the profession came back to me over and over again.</p><p>All the other professions didn't have that much sense to me since then. It tried several of jobs which I thought I could like. Appetite comes with eating, you know. It surely did not work for me. I could not forget the feeling that you can create something from scratch. I felt the lack of creativity in each of these jobs which I had when I was programming. And I knew how useful this profession is.</p><p>So, I obviously didn't leave myself a chance not to become a developer, so one evening after my another day on my OK-job, I decided to claim my life back. I decided to come back to IT-field as a web developer. Those lessons I learned with my friend helped me, even after several years without practice.</p><p>After several months of every day studying lessons and making projects I became able to get the fruits of my work. Currently, you can observe the result of it - my own website made from scratch. Will see what life is going to bring on the table, but I feel very positive having this results in a relatively short amount of time.</p><p>Thank you so much for your time and attention! I promise to update this article or maybe other ones to keep you in touch with my career progress. See you!</p>");
      $(".article-image").css("background-image", "url('/img/blog/img-1-4000-(2000).jpg')");
    } else if (id == 2) {
      $(".article-header").text("Basic steps in building a web presence");
      $(".article-date").text("01 May, 2017");
      $(".article-content").html("<p>Web presence building requires good design, and technical skills. But one should not forget about purpose and planning as a fundament of the whole process. Owner and his audience have their own needs and you are to meet them.</p>");
      $(".article-image").css("background-image", "url('/img/blog/img-2-4000-(2000).jpg')");
    } else if (id == 3) {
      $(".article-header").text("Should work bring joy?");
      $(".article-date").text("06 May, 2017");
      $(".article-content").html("<p>It is tough philosophical question. Is it possible to be happy working on a job which you feel isn't yours? How to define so-called 'your' job? Is hobby still joyful when you make it a job? Let's take a closer look, folks!</p>");
      $(".article-image").css("background-image", "url('/img/blog/img-3-4000-(2000).jpg')");
    }
  }
  
  // Events
  
  //Slide to a section on click on a corresponding menu button
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    $root.animate({scrollTop: $($.attr(this, "href")).offset().top}, 500);
  });
  
  $("#nav-trigger").on("click", function () {
    toggleMenu(500);
  });

  $(".mobile-nav li").on("click", function () {
    toggleMenu(200);
  });
  
  $("#back-arrow").on("click", articleClose);
  
  $(".body-shadow").on("click", function () {
    toggleMenu(200);
  });
  
  // When article button is clicked
  $(".article-prev").on("click", function () {
    articleOpen(this);
  });
  
  // When blog post is open
  $(document).on("click", ".article-wrap", function() {
    if (event.target === this) { // If event is triggered by this object, not its child...
      articleClose();
    }
  });
  
  $(document).on("click", "#next", function () {
    next();
  });
  
  $(document).on("click", "#back", function () {
    back();
  });
  
  $(document).keydown(articleThumb);
  
});