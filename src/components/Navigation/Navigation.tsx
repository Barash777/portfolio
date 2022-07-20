import React from 'react';
import css from './Navigation.module.css'

const Navigation = () => {
    return (
        <div className={css.nav}>
            <a href="#main">Main</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contacts">Contacts</a>
        </div>
    );
};

export default Navigation;