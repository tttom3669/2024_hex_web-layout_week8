import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiperHero = new Swiper('.swiper-hero', {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  spaceBetween: 40,
  initialSlide: 1,
});

document.querySelectorAll(`.swiper-perView-one`).forEach((swiper) => {
  const swiperPerViewOne = new Swiper(swiper, {
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
    },
    slidesPerView: 1.09,
    spaceBetween: 24,
  });
});

const swiperHotCourse = new Swiper('.swiper-hot-course', {
  modules: [Navigation],
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1.09,
  spaceBetween: 24,
});

const swiperTeacher = new Swiper('.swiper-teacher', {
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },

  slidesPerView: 1,
  spaceBetween: 24,
});
