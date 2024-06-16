import { api_KEY, api_URL } from './const';
import axios from 'axios';

export const getVideoData = (api_URL, api_KEY, videoId) => {
    return axios
    .get(`${api_URL}videos/${videoId}?api_key=${api_KEY}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}