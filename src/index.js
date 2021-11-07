import './sass/main.scss';
import Notiflix from 'notiflix';

import { apiService } from './js/apiService';
import news from './data/news';
import card from './template/card.hbs';

console.log(news);

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

const createMarkup = news.map(item => card(item)).join('');

gallery.innerHTML = createMarkup;

formSearch.addEventListener('submit', onSubmit);
