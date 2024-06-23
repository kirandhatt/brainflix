import "./UploadPage.scss";
import videoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { api_URL } from "../../utilities/const";
import { useState } from "react";

export default function Upload() {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [formError, setFormError] = useState("");

    const handleTitleField = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionField = (e) => {
        setDescription(e.target.value);
    };

    const checkInputs = () => {
        if (title === "") {
            alert('Please add a title to your video.')
            setFormError({inputName: "title", message: "Please add a title to your video."});
            return false;
        } else if (description === "") {
            alert('Please add a description to your video.')
            setFormError({inputName: "title", message: "Please add a description to your video."});
            return false;
        } else {
            setFormError({inputName: ""});
            return true;
        }
    };

    const isFormValid = () => {
        if (!checkInputs()) {
            return false;
        } return true;
    };

    const handleCancel = () => {
        const confirmCancel = window.confirm("Cancel video upload?");
        if (confirmCancel) {
            navigate("/");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            const formData = {
                title: title,
                description: description
            };

            console.log('Submitting form data:', formData);

            axios.post(`${api_URL}videos`, formData, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((result) => {
                    console.log('Result:', result.data);
                    setTitle("");
                    setDescription("");
                    const newVideoId = result.data.id;
                    navigate(`/videos/${newVideoId}`);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    return (
        <main className="upload">
            <div className="upload__title">
                <h1 className="upload__title-text">Upload Video</h1>
            </div>
            <form className="upload-form" id="upload-form" onSubmit={handleSubmit} action="#">
                <div className="upload-form__thumbnail-container">
                    <label className="upload-form__label upload-form__label--thumbnail" htmlFor="thumbnail" name="image">VIDEO THUMBNAIL</label>
                    <img className="upload-form__thumbnail" src={videoThumbnail} alt="runner in starting position on track" name="thumbnail" id="thumbnail"/>
                </div>
                <div className="upload-form__input-container">
                    <label className="upload-form__label" htmlFor="title">TITLE YOUR VIDEO</label>
                    <input className={`upload-form__input ${formError && formError.inputName === "title" ? "form__error" : ""}`} type="text" name="title" id="title" maxLength="40" placeholder="Add a title to your video" onChange={handleTitleField} value={title}/>
                    <label className="upload-form__label" htmlFor="description">ADD A VIDEO DESCRIPTION</label>
                    <textarea className={`upload-form__input upload-form__input--textarea ${formError && formError.inputName === "description" ? "form__error" : ""}`} name="description" id="description" maxLength="400" placeholder="Add a description to your video" onChange={handleDescriptionField} value={description}></textarea>
                </div>
                <div className="upload-form__button-container">
                    <button className="upload-form__publish-button" type="submit" id="submit" onClick={handleSubmit}>
                        <img className="upload-form__publish-button-img" src={publishIcon} alt="publish icon"/>
                        <span className="upload-form__publish-button-text">PUBLISH</span>
                    </button>
                <div>
                    <button className="upload-form__cancel-button" type="button" id="cancel" onClick={handleCancel}>
                        <img className="upload-form__cancel-button-img" src={publishIcon} alt="publish icon"/>
                        <span className="upload-form__cancel-button-text">CANCEL</span>
                    </button>
                </div>
                </div> 
            </form>
        </main>
    );
}