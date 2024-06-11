import React from 'react'
import "./Comments.scss"
import avatar from "../../assets/images/Mohan-muruge.jpg"
import commentIcon from "../../assets/icons/add_comment.svg"
import { formatDate } from '../FormatDate/FormatDate'

export default function CommentsInput ({currentVideoDetails}) {
    const numberOfComments = currentVideoDetails.comments.length;

    return (
            <section className='comments'>
                <h2 className='comments__count'>{numberOfComments} Comments</h2>
                <div className='comments__form-container'>
                    <img className='comments__avatar' id="avatar" src={avatar} alt="user avatar" />
                    <form className='comments__form' id="comments-form" action="#">
                        <label className='comments__form-subheader' htmlFor="comment">JOIN THE CONVERSATION</label>
                        <textarea className='comments__form-input' name="comment" id="comment" placeholder='Add a new comment' maxLength="200"></textarea>
                        <button className='comments__form-button' type='submit' id='submit'>
                            <img className='comments__form-img' src={commentIcon} alt="comment icon" />
                            <span className='comments__form-text'>COMMENT</span>
                        </button>
                    </form>
                </div>
                
                {currentVideoDetails.comments.map((video) => (
                    <div className='old-comments' id={video.id} key={video.id}>
                        <div className='old-comments__left'>
                            <object className='old-comments__avatar' src=''/>
                        </div>
                        <div className='old-comments__right'>
                            <div className='old-comments__title-container'>
                                <h5 className='old-comments__name'>{video.name}</h5>
                                <p className='old-comments__date'>{formatDate(video.timestamp)}</p>
                            </div>
                            <p className='old-comments__text'>{video.comment}</p> 
                        </div>
                    </div>
                ))}
            </section>
    );
}