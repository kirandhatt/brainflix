import "./Comments.scss"
import avatar from "../../assets/images/Mohan-muruge.jpg"
import commentIcon from "../../assets/icons/add_comment.svg"
import { formatDate } from '../../utilities/formatDate'

export default function Comments ({currentVideoData, commentsData}) {
    
    const numberOfComments = commentsData.length;
    const sortedComments = commentsData.sort((a,b) => b.timestamp - a.timestamp);

    return (
        <section className='comments'>
            <h2 className='comments__count'>{numberOfComments} {numberOfComments === 1 ? 'Comment' : 'Comments'}</h2>
            <div className='comments__form-container'>
                <img className='comments__avatar' id="avatar" src={avatar} alt="user avatar" />
                <form className='comments__form' id="comments-form" action="#">
                    <label className='comments__form-subheader' htmlFor="comment">JOIN THE CONVERSATION</label>
                    <textarea className='comments__form-input' name="comment" id="comment" placeholder='Add a new comment' maxLength="200"></textarea>
                    <button className='comments__form-button' type='submit' id='submit'>
                        <img className='comments__form-img' id='button-img' src={commentIcon} alt="comment icon" />
                        <span className='comments__form-text' id='button-text'>COMMENT</span>
                    </button>
                </form>
            </div>
            
            {sortedComments.map((comment) => (
                <div className='old-comments' id={comment.id} key={comment.id}>
                    <div className='old-comments__left'>
                        <div className='old-comments__avatar'></div>
                    </div>
                    <div className='old-comments__right'>
                        <div className='old-comments__title-container'>
                            <h5 className='old-comments__name'>{comment.name}</h5>
                            <p className='old-comments__date'>{formatDate(comment.timestamp)}</p>
                        </div>
                        <p className='old-comments__text'>{comment.comment}</p> 
                    </div>
                </div>
            ))}
        </section>
    );
}