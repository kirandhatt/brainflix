import './NextVideo.scss';
import Video from "../Video/Video"
import { NavLink } from 'react-router-dom';

export default function NextVideo ({videoData, currentVideoID, changeVideo}) {
    
    const videoList = videoData;
    const nextVideoListFiltered = videoList.filter((video) => {
        return video.id !== currentVideoID;
    })

    return (
        <section className='next-video'>
            <div className='next-video__title'>
                <h4 className='next-video__title-text'>NEXT VIDEOS</h4>
            </div>
            <div>
                {nextVideoListFiltered.map((video) => (
                    <NavLink to={`/videos/${video.id}`} key={video.id}>
                        <Video
                            changeVideo={changeVideo}
                            key={video.id}
                            id={video.id}
                            image={video.image}
                            title={video.title}
                            channel={video.channel}
                        />
                    </NavLink>   
                ))}
            </div>
        </section>
    );
}