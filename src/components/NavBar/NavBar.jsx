import React from 'react';
import logo from "../../assets/logos/BrainFlix-logo.svg";
import avatar from '../../assets/images/Mohan-muruge.jpg';
import searchIcon from '../../assets/icons/search.svg';
import uploadIcon from '../../assets/icons/upload.svg';
import './NavBar.scss';

export default function NavBar() {
    return (
        <>
            <header className='header-container'>
                <div className='header'>
                    <div className='header__logo'>
                        <img className='header__logo-img' src={logo} alt="BrainFlix Logo"/>
                    </div>
                    <form className='header__search-container' action="#">
                        <div className='header__search'>
                        <img className='header__search-img' src={searchIcon} alt="search icon"/>
                        <input className='header__search-input' type="text" placeholder='Search' />
                        </div>
                    </form>
                    <div className='header__avatar'>
                        <img className='header__avatar-img' src={avatar} alt="user avatar"/>
                    </div>
                    <button className='header__button'>
                        <img className='header__button-img' src={uploadIcon} alt="upload icon"/>
                        <span className='header__button-text'>UPLOAD</span>
                    </button>
                </div>
            </header>
        </>
    );
}