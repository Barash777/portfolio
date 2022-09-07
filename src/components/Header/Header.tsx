// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faReact} from '@fortawesome/fontawesome-svg-core'
import React from 'react';
import MobileHeader from './MobileHeader/MobileHeader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {solid, regular, brands, icon} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {solid, regular, brands, icon} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import {faReact} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        /*<div className={css.header}>
            <div className={`${cssContainer.container} ${css.container}`}>
                <Navigation/>
            </div>
        </div>*/

        <>
            <MobileHeader/>


            <header className="header-left" id="navbar-collapse-toggle">
                <div className="scroll-bar">
                    <div className="hl-top">
                        {/*<div className="hl-logo">*/}
                        <div>
                            <a href="#">
                                SB
                            </a>
                        </div>
                        {/*<FontAwesomeIcon icon={icon}/>*/}
                        {/*<span className="fa-solid fa-user"></span>*/}
                        {/*<i className="fa-solid fa-user"></i>*/}
                        {/*<span className="fa-solid fa-user"></span>*/}
                        {/*<FontAwesomeIcon icon={solid('user-secret')}/>*/}
                        {/*<FontAwesomeIcon icon={faEnvelope}/>*/}
                    </div>
                    <ul className="nav nav-menu">
                        <li>
                            <a className="nav-link active" href="#home" data-toggle="tooltip" title="HOME">
                                <i className="fas fa-house-damage"></i>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="#about" data-toggle="tooltip" title="ABOUT">
                                <i className="far fa-address-card"></i>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="#resume" data-toggle="tooltip" title="RESUME">
                                <i className="far fa-file"></i>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="#work" data-toggle="tooltip" title="WORK">
                                <i className="fas fa-briefcase"></i>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="#blog" data-toggle="tooltip" title="BLOG">
                                <i className="fas fa-blog"></i>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="#contactus" data-toggle="tooltip" title="CONTACT">
                                <i className="fas fa-id-card-alt"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
};

export default Header;