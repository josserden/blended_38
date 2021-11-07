import axios from 'axios';

axios.defaults.baseURL = 'https://gnews.io/api/v4/search';
const API_KEY = 'fe2342f9731729c6ea58a02104709295';

export const apiService = query => {
  return axios.get(`?q=${query}&lang=uk&token=${API_KEY}`).then(res => console.log(res));
};
