import { api_URL } from './const';
import axios from 'axios';

export const getVideoData = (api_URL, videoId) => {
    return axios
    .get(`${api_URL}videos/${videoId}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}