import {useState} from 'react';
import MainVideo from '../MainVideo/MainVideo';
import videoDetails from '../../data/video-details.json';
import UnderVideo from '../UnderVideo/UnderVideo';

export default function Main() {

    const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);

    function changeVideo(id) {
        const selectedVideo = videoDetails.find((video) => {
            return video.id === id;
        })

        setCurrentVideo(selectedVideo);
    }

    return (
        <>
            <MainVideo
                currentVideo={currentVideo}
            />
            <UnderVideo
                currentVideoID={currentVideo.id}
                currentVideoDetails={currentVideo}
                changeVideo={changeVideo} 
            />
        </>
    )
}