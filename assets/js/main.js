const slider = new Swiper(".single_slider_swiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".single_slider_next",
    prevEl: ".single_slider_prev",
  },
});
$(".header__burger").on("click", function () {
  $(".menu").addClass("open");
  $("body").addClass("lock");
});

$(".menu__close").on("click", function () {
  $(".menu").removeClass("open");
  $("body").removeClass("lock");
});

$(document).mouseup(function (e) {
  var div = $(".menu");
  if (!div.is(e.target) && div.has(e.target).length === 0) {
    $(".menu").removeClass("open");
    $("body").removeClass("lock");
  }
});
