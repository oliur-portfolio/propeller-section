// Tab Effect
$(document).ready(function () {
  var tabWrapper = $("#tab-block"),
    tabMnu = tabWrapper.find(".tab-mnu  li"),
    tabContent = tabWrapper.find(".tab-cont > .tab-pane");

  tabContent.not(":first-child").hide();

  tabMnu.each(function (i) {
    $(this).attr("data-tab", "tab" + i);
  });
  tabContent.each(function (i) {
    $(this).attr("data-tab", "tab" + i);
  });

  tabMnu.click(function () {
    var tabData = $(this).data("tab");
    tabWrapper.find(tabContent).hide().removeClass("active");
    tabWrapper
      .find(tabContent)
      .filter("[data-tab=" + tabData + "]")
      .show()
      .addClass("active");
  });

  $(".tab-mnu > li").click(function () {
    var before = $(".tab-mnu li.active");
    before.removeClass("active");
    $(this).addClass("active");
  });
});

$(window).scroll(function () {
  var sticky = $(".main-header"),
    scroll = $(window).scrollTop();

  if (scroll >= 20) sticky.addClass("fixed");
  else sticky.removeClass("fixed");
});
/*accrodions*/
$(".accordion-title").click(function () {
  $(this).toggleClass("open").siblings().removeClass("open").next();
  $(this).next().addClass("open");
  $(this).not(".open").next().removeClass("open");
});

/*testimonials*/
$(function () {
  var owl = $(".owl-carousel.testimonials");
  owl.owlCarousel({
    items: 2,
    margin: 10,
    autoplay: 50,
    loop: true,
    nav: false,
    dots: false,
  });
  var owl = $(".owl-carousel.news-grid");
  owl.owlCarousel({
    items: 4,
    margin: 10,
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      769: {
        items: 3,
      },
      1024: {
        items: 4,
      },
    },
  });
});
/*toggle menu*/
$(".toggle").click(function () {
  $("ul.mian-menu").toggleClass("open");
  $(this).toggleClass("close");
  $("body").toggleClass("scroll-hide");
});
$(document).ready(function () {
  $("button#pop1").click(function () {
    $("div#pop1").addClass("show-modal");
  });
  $("button#pop2").click(function () {
    $("div#pop2").addClass("show-modal");
  });
  $("button#pop3").click(function () {
    $("div#pop3").addClass("show-modal");
  });
  $("button#pop4").click(function () {
    $("div#pop4").addClass("show-modal");
  });
  $("button#pop5").click(function () {
    $("div#pop5").addClass("show-modal");
  });
  $("button#pop6").click(function () {
    $("div#pop6").addClass("show-modal");
  });
  $("button#pop7").click(function () {
    $("div#pop7").addClass("show-modal");
  });
  $(".team-popup , button.mfp-close").click(function () {
    $(".show-modal").removeClass("show-modal");
  });
  $(".member-pic , .member-desc").click(function () {
    event.stopPropagation();
  });
});
