import './MainVideo.scss'
import { useParams } from 'react-router-dom';

export default function MainVideo({videoData}){

    const {videoId} = useParams();

    const currentVideo = videoData.find((video) => {
        return video.id == ( videoId || videoData[0].id);
    });


    return (
        <section className='main-video'>
            <div className='main-video__container'>
                <video className='main-video__video' src="" width="100%" poster={currentVideo.image} controls></video>
            </div>
        </section>
    )
}
