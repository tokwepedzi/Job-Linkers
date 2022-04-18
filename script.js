var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    //play with this setting to get desired effect on slides
    // rotate: 50,
    // stretch: 0,
    // depth: 100,
    // modifier: 1,
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 3,
    slideShadows: true,
  },
  loop: true,
});

// var swiper = new Swiper(".review-slider", {
//   spaceBetween: 20,
//   centeredSlides: true,
//   autoplay: {
//     delay: 7500,
//     disableOnInteraction: false,
//   },
//   loop: true,
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     640: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 3,
//     },
//   },
// });
