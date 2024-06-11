import React from 'react'
import "./Video.scss"

export default function Video ({changeMainVideo, id, title, channel, image}) {
    const clickHandler = () => {
        changeMainVideo(id);
    };

    return (
    <div className='next-video-list' onClick={clickHandler} id={id} key={id}>
        <div className='next-video-list__left'>
            <img className='next-video-list__image' src={image} alt={title} />
        </div>
        <div className='next-video-list__right'>
            <h4 className='next-video-list__title'>{title}</h4>
            <p className='next-video-list__channel'>{channel}</p>
        </div>
    </div>
    )
}