
// первый слайдер (по 3 за раз)
const swiper = new Swiper('.portfolio-slider', {
  slidesPerView: 3,      // сколько слайдов видно
  slidesPerGroup: 3,     // листаем по 3 слайда за раз
  spaceBetween: 24,      // отступы между слайдами
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    1300: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
  },

  on: {
    slideChange: function () {
      const totalGroups = Math.ceil((this.slides.length) / this.params.slidesPerGroup);
      const currentGroup = Math.floor(this.activeIndex / this.params.slidesPerGroup) + 1;

      // обновляем цифры
      document.querySelector('.progress-fraction').textContent =
        `${String(currentGroup).padStart(2, '0')}/${String(totalGroups).padStart(2, '0')}`;

      // обновляем прогресс
      const progress = (currentGroup / totalGroups) * 100;
      document.querySelector('.progress-fill').style.width = `${progress}%`;
    },

    // обновляем при смене брейкпоинта
    breakpoint: function () {
      this.emit('slideChange');
    }

  },
});

// инициализация прогресса при загрузке
swiper.emit('slideChange');





// второй слайдер (по 1 за раз)
const swiper2 = new Swiper('.single-slider', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 24,
  navigation: {
    nextEl: '.single-next',
    prevEl: '.single-prev',
  },
  on: {
    slideChange: function () {
      const totalGroups = Math.ceil((this.slides.length) / this.params.slidesPerGroup);
      const currentGroup = Math.floor(this.activeIndex / this.params.slidesPerGroup) + 1;

      // обновляем цифры
      document.querySelector('.single-progress .progress-fraction').textContent =
        `${String(currentGroup).padStart(2, '0')}/${String(totalGroups).padStart(2, '0')}`;

      // обновляем прогресс
      const progress = (currentGroup / totalGroups) * 100;
      document.querySelector('.single-progress .progress-fill').style.width = `${progress}%`;
    },
  },
});

// инициализация прогресса при загрузке
swiper2.emit('slideChange');


