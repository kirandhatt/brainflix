import {useEffect, useState} from 'react';
import MainVideo from '../MainVideo/MainVideo';
import UnderVideo from '../UnderVideo/UnderVideo';
import axios from 'axios';
import { api_KEY, api_URL } from '../../utilities/const';

export default function Main() {

    const [videoData, setVideoData] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);

    const {videoId} = useParams();

    useEffect(() => {
        axios
            .get(`${api_URL}/videos?api_key=${api_KEY}`)
            .then((response) => {
                setVideoData(response.data);
                if(videoId) {
                    const loadedVideo = response.data.find((video) => {
                        return video.id === videoId;
                    });
                    setCurrentVideo(loadedVideo);
                } else {
                    setCurrentVideo(response.data[0]);
                }
            })
            .catch((error) => console.log(error));
    }), [videoId];

    function changeVideo(id) {
        const selectedVideo = videoData.find((video) => {
            return video.id === id;
        })

        setCurrentVideo(selectedVideo);
    }

    return (
        <>
            {currentVideo && (
                <main>
                    <MainVideo
                        videoData={videoData}
                    />
                    <UnderVideo
                        currentVideoID={currentVideo.id}
                        videoData={videoData}
                        changeVideo={changeVideo} 
                    />
                </main>
            )}
        </>
    );
}