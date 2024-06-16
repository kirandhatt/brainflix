import "./UploadPage.scss";
import videoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Upload() {

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        alert("Video upload successful!");
        navigate("/");
    }

    return (
        <main className="upload">
            <div className="upload__title">
                <h1 className="upload__title-text">Upload Video</h1>
            </div>
            <form className="upload-form" id="upload-form" onSubmit={handleSubmit} action="#">
                <div className="upload-form__thumbnail-container">
                    <label className="upload-form__label upload-form__label--thumbail" htmlFor="thumbnail">VIDEO THUMBNAIL</label>
                    <img className="upload-form__thumbnail" src={videoThumbnail} alt="runner in starting position on track" name="thumbnail" id="thumbnail"/>
                </div>
                <div className="upload-form__input-container">
                    <label className="upload-form__label" htmlFor="title">TITLE YOUR VIDEO</label>
                    <input className="upload-form__input" type="text" name="title" id="title" maxLength="40" placeholder="Add a title to your video"/>
                    <label className="upload-form__label" htmlFor="description">ADD A VIDEO DESCRIPTION</label>
                    <textarea className="upload-form__input upload-form__input--textarea" name="description" id="description" maxLength="400" placeholder="Add a description to your video"></textarea>
                </div>
                <div className="upload-form__button-container">
                    <button className="upload-form__publish-button" type="submit" id="submit">
                        <img className="upload-form__publish-button-img" src={publishIcon} alt="publish icon"/>
                        <span className="upload-form__publish-button-text">PUBLISH</span>
                    </button>
                </div>
                <Link to="/">
                    <span className="upload-form__cancel-text">CANCEL</span>
                </Link>
            </form>
        </main>
    );
}