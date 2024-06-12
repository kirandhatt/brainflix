import React from 'react'
import './MainVideoDetails.scss'
import viewsIcon from "../../assets/icons/views.svg"
import likesIcon from "../../assets/icons/likes.svg"
import { formatDate } from '../../utilities/formatDate'

export default function MainVideoDetails({currentVideoDetails}) {
    return (
        <>
            <section className='video-details'>
                <div className='video-details__title-container'>
                    <h1 className='video-details__title'>{currentVideoDetails.title}</h1>
                </div>
                <div className='video-details__info'>
                    <div className='video-details__info-left'>
                        <h4 className='video-details__info-channel'>By {currentVideoDetails.channel}</h4>
                        <p className='video-details__info-date'>{formatDate(currentVideoDetails.timestamp)}</p>
                    </div>
                    <div className='video-details__info-right'>
                        <div className='video-details__info-views'>
                            <img className='video-details__info-icon--views' src={viewsIcon} alt="Views Icon" />
                            <p className='video-details__info-count--views'>{currentVideoDetails.views}</p>
                        </div>
                        <div className='video-details__info-likes'>
                            <img className='video-details__info-icon' src={likesIcon} alt="Like Icon" />
                            <p className='video-details__info-count'>{currentVideoDetails.likes}</p>
                        </div>
                    </div>
                </div>
                <div className='video-details__description'>
                    <p className='video-details__description-text'>{currentVideoDetails.description}</p>
                </div>
            </section>
        </>
    )
}