// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faReact} from '@fortawesome/fontawesome-svg-core'
import React, {useState} from 'react';
import MobileHeader from './MobileHeader/MobileHeader';
// @ts-ignore
import ScrollspyNav from 'react-scrollspy-nav';

const Header = () => {

    const [open, setOpen] = useState<boolean>(false)
    let showMenuClasses = ''
    if (open)
        showMenuClasses = 'menu-open menu-open-desk'

    return (

        <>

            <MobileHeader open={open} setOpen={setOpen}/>


            <header className={`header-left ${showMenuClasses}`}>
                <ScrollspyNav
                    scrollTargetIds={['about', 'skills', 'projects', 'contacts']}
                    offset={0}
                    activeNavClass="active"
                    scrollDuration="200"
                >
                    <nav id="navbar" className="scroll-bar">
                        <ul className="nav nav-menu">
                            <li>
                                <a className="nav-link" href="#about" data-toggle="tooltip" title="ABOUT">
                                    <i className="far fa-address-card"></i>
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="#skills" data-toggle="tooltip" title="SKILLS">
                                    <i className="fas fa-book"></i>
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="#projects" data-toggle="tooltip" title="PROJECTS">
                                    <i className="fas fa-briefcase"></i>
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="#contacts" data-toggle="tooltip" title="CONTACTS">
                                    <i className="fas fa-id-card-alt"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </ScrollspyNav>
            </header>
        </>
    );
};

export default Header;