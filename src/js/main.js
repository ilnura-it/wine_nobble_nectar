window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 2000,
            disabldeOnInteraction: false
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
                slidesPerView: 1.1,
                spaceBetween: 20,
                centeredSlides: false
          },
          // when window width is >= 480px
          450: {
                slidesPerView: 1.4,
                spaceBetween: 30,
                centeredSlides: true,
                initialSlide: 1
          }
        }
      });
})

