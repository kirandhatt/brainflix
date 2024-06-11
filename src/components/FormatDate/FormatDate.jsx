import videoDetails from '../../data/video-details.json';

export const formatDate = (date) => {
    let newDate = new Date(date).toLocaleDateString();
    return newDate;
}