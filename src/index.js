import './sass/main.scss';
import Notiflix from 'notiflix';

import '../node_modules/ellipsis.js/ellipsis.min';

Ellipsis({
  ellipsis: '…', //default ellipsis value
  responsive: true, //if you want the ellipsis to move with the window resizing
  className: '.clamp', //default class to apply the ellipsis
  lines: 1, //default number of lines when the ellipsis will appear
});

import { apiService } from './js/apiService';
import news from './data/news';
import card from './template/card.hbs';

const formSearch = document.querySelector('.js-form');
const gallery = document.querySelector('.js-gallery');

const onSubmit = event => {
  event.preventDefault();

  const userRequest = event.currentTarget.elements.query.value.trim();

  if (!userRequest) return Notiflix.Notify.warning('В запросе пусто');

  // apiService(userRequest).then(news => {
  //   gallery.insertAdjacentHTML('beforeend', card(news));
  // });
};

// const createMarkup = news.map(item => card(item)).join('');
const createMarkup = news.reduce((acc, item) => acc + card(item), '');

gallery.insertAdjacentHTML('beforeend', createMarkup);

formSearch.addEventListener('submit', onSubmit);
