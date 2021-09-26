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
};

const closeModal = () => {
  lightbox.classList.remove('is-open');
  imgLightbox.src = '';
  imgLightbox.alt = '';
};

// Слушатели
gallery.addEventListener('click', openModal);
btnLightbox.addEventListener('click', closeModal);
