import './sass/main.scss';
import { galleryItems } from './js/galleryItems';
import refs from './js/refs';
import { createGallery } from './js/createGallery';
const { gallery, lightbox, btnLightbox, overlay, imgLightbox } = refs;

// Создаём разметку
const markup = galleryItems.map(item => createGallery(item)).join('');
gallery.insertAdjacentHTML('beforeend', markup);

// Реализация делегирования на галерее
const openModal = event => {
  event.preventDefault();

  if (event.target === event.currentTarget) return;

  lightbox.classList.add('is-open');
  imgLightbox.src = event.target.getAttribute('data-source');
  imgLightbox.alt = event.target.alt;

  window.addEventListener('keydown', onPressESC);
  gallery.addEventListener('keydown', onPressArrow);
};

const closeModal = () => {
  lightbox.classList.remove('is-open');
  imgLightbox.src = '';
  imgLightbox.alt = '';

  window.removeEventListener('keydown', onPressArrow);
};

const onOverlayClick = event => {
  if (event.target === event.currentTarget) closeModal();
};

const onPressESC = event => {
  if (event.code === 'Escape') closeModal();
};

const onPressArrow = event => {
  let activeIndex = galleryItems.findIndex(image => image.original === imgLightbox.src);

  if (event.code === 'ArrowRight') {
    activeIndex < galleryItems.length - 1 ? (activeIndex += 1) : 0;
  }

  if (event.code === 'ArrowLeft') {
    activeIndex > 0 ? (activeIndex -= 1) : galleryItems.length - 1;
  }

  imgLightbox.src = galleryItems[activeIndex].original;
  imgLightbox.alt = galleryItems[activeIndex].alt;
};

// Слушатели
gallery.addEventListener('click', openModal);
btnLightbox.addEventListener('click', closeModal);
overlay.addEventListener('click', onOverlayClick);
