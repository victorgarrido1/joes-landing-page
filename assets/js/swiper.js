document.addEventListener("DOMContentLoaded", function() {
  const swiper = new Swiper('.mySwiper', {
    // Optional parameters
    speed: 400,
    spaceBetween: 100,

    // Number of slides per view
    slidesPerView: 'auto',

    // Centered slides
    centeredSlides: false,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    autoHeight: false,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});