import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '25776093-bb4fa85787ae7c355f18a58ee';

export const fetchImage = async search => {
  const response = await axios.get('', {
    params: {
      key: API_KEY,
      q: search,
      page: 1,
      per_page: 5,
      image_type: 'photo',
      orientation: 'horizontal',
    },
  });
  return response.data;
};
