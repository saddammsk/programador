var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 55,
  autoplay: {
    delay: 1000,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.9,
      spaceBetween: 32,
      centeredSlides: true,
      loop: true,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 3,
      spaceBetween: 55,
    },
    375: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 4.5,
  spaceBetween: 20,
  autoplay: {
    delay: 1000,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 32,
      centeredSlides: true,
      loop: true,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
  },
});
var swiper = new Swiper(".mySwiper4", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 3,
  spaceBetween: 30,

  breakpoints: {
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    // when window width is >= 640px
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 32,
      centeredSlides: true,
      loop: true,
    },
    // when window width is >= 640px
  },
});

$(document).ready(function () {
  $("#exampleModal").on("hide.bs.modal", function () {
    $("iframe").attr("src", "");
  });
  $("#exampleModal").on("show.bs.modal", function () {
    $("iframe").attr("src", "https://www.youtube.com/embed/K4TOrB7at0Y?si=ohkLeQejblqGuVEc&amp;autoplay=1");
  });
});

$(".btn-warning").click(function () {
  $(this).next(".popover-box").toggleClass("d-flex");
});

