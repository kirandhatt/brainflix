import './UnderVideo.scss'
import Comments from '../Comments/Comments'
import NextVideo from '../NextVideo/NextVideo'
import MainVideoDetails from '../MainVideoDetails/MainVideoDetails'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getVideoData } from '../../utilities/getVideoData';
import { api_URL } from '../../utilities/const';

export default function UnderVideo ({currentVideoID, changeVideo, videoData}) {

    const [currentVideoData, setCurrentVideoData] = useState([]);
    const [commentsData, setCommentsData] = useState([]);
    const {videoId} = useParams();

    useEffect(() => {
        const id = videoId || currentVideoID;
        getVideoData(api_URL, id)
            .then((result) => {
                setCurrentVideoData(result);
                setCommentsData(result.comments)
            })
            .catch((error) => console.log(error));
        }, [currentVideoID, videoId]);

    return (
        <>
            <section className='under-video'>
                <div className='under-video__container'>
                    <div className='under-video__left'>
                        <MainVideoDetails currentVideoData={currentVideoData} />
                        <Comments
                            currentVideoData={currentVideoData}
                            commentsData={commentsData}
                        />
                    </div>
                    <div className='under-video__right'>
                        <NextVideo
                            videoData={videoData}
                            changeVideo={changeVideo}
                            currentVideoID={currentVideoID}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}