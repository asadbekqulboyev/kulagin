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
  $(".benefits_img").each(function () {
    const $wrap = $(this);
    const video = $wrap.find("video")[0];
    const $play = $wrap.find(".play");
    const $overlay = $wrap.find(".video_overlay");
    $play.add($overlay).on("click", function () {
      if (video.paused) {
        video.play();
        video.controls = true;
      }
    });
    video.addEventListener("play", () => {
      $play.fadeOut();
    });
    video.addEventListener("pause", () => {
      $play.fadeIn();
    });
    video.addEventListener("ended", () => {
      $play.fadeIn();
    });
  });
});
