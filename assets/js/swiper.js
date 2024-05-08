const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal', // Define the direction of the swiper (horizontal or vertical)
    loop: true, // Enable looping of slides
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination', // Selector for pagination container
    },
  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next', // Selector for the next arrow button
        prevEl: '.swiper-button-prev', // Selector for the previous arrow button
    },
  
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar', // Selector for the scrollbar container
    },
});