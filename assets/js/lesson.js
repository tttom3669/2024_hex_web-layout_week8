import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

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
    nextEl: '.swiper-hot-course__btn-next',
    prevEl: '.swiper-hot-course__btn-prev',
  },
  slidesPerView: 1.09,
  spaceBetween: 24,
});

const swiperPopularTheme = new Swiper('.swiper-popular-theme', {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.swiper-popular-theme__btn-next',
    prevEl: '.swiper-popular-theme__btn-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    992: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1200: {
      slidesPerView: 6,
      slidesPerGroup: 6,
    },
  },
  slidesPerGroup: 1,
  slidesPerView: 1.5,
  spaceBetween: 24,

  pagination: {
    el: '.swiper-pagination',
  },
});

// const scrollContainer = document.querySelector('.lesson-link-container');
// let isDown = false;
// let startX;
// let scrollLeft;

// scrollContainer.addEventListener('mousedown', (e) => {
//   isDown = true;
//   scrollContainer.classList.add('active');
//   startX = e.pageX - scrollContainer.offsetLeft; // 滑鼠的 X 軸位置 - 容器最左座標位置
//   scrollLeft = scrollContainer.scrollLeft;
//   scrollContainer.style.cursor = 'grabbing';
// });

// scrollContainer.addEventListener('mouseleave', (e) => {
//   isDown = false;
//   scrollContainer.style.cursor = 'grab';
// });

// scrollContainer.addEventListener('mouseup', (e) => {
//   isDown = false;
//   scrollContainer.style.cursor = 'grab';
// });

// scrollContainer.addEventListener('mousemove', (e) => {
//   if (!isDown) return;
//   e.preventDefault();
//   scrollContainer.style.cursor = 'grabbing';
//   const x = e.pageX - scrollContainer.offsetLeft;
//   const walk = (x - startX) * 2; // 滑動速度
//   scrollContainer.scrollLeft = scrollLeft - walk;
// });
