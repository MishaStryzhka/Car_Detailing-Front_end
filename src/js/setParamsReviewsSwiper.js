const swiperEl = document.querySelector('.reviews-swiper');

if (swiperEl) {
  // swiper parameters
  const swiperParams = {
    slidesPerView: 1,
    breakpoints: {
      390: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 3,
      },
    },
  };

  // now we need to assign all parameters to Swiper element
  Object.assign(swiperEl, swiperParams);

  // and now initialize it
  swiperEl.initialize();
}
