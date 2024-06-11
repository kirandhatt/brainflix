import React from 'react';
import './NextVideo.scss';
import nextVideoList from "../../data/video-details.json"
import Video from "../Video/Video"

export default function NextVideo ({currentVideoID, changeMainVideo}) {
    const nextVideoListFiltered = nextVideoList.filter((video) => {
        return video.id !== currentVideoID;
    })

    return (
        <>
            <section className='next-video'>
                <div className='next-video__title'>
                    <h4 className='next-video__title-text'>NEXT VIDEOS</h4>
                </div>
                <div>
                    {nextVideoListFiltered.map((video) => (
                        <Video
                            changeMainVideo={changeMainVideo}
                            key={video.id}
                            id={video.id}
                            image={video.image}
                            title={video.title}
                            channel={video.channel}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}