import React from 'react'
import './MainVideo.scss'

export default function MainVideo({currentVideo}){
    return (
        <>
        <section className='main-video'>
            <div className='main-video__container'>
            <video className='main-video__video' src="" width="100%" poster={currentVideo.image} controls></video>
            </div>
        </section>
        </>
    )
}
