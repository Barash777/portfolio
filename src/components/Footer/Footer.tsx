import React from 'react';
import css from './Footer.module.css'
import cssContainer from '../../common/styles/Container.module.css'

const Footer = () => {
    return (
        <div className={css.footer}>
            <div className={`${cssContainer.container} ${css.container}`}>
                <h2 className={css.title}>Siarhei Baranouski</h2>
                <div className={css.socials}>
                    <div className={css.icon}></div>
                    <div className={css.icon}></div>
                    <div className={css.icon}></div>
                    <div className={css.icon}></div>
                </div>
                <span className={css.copyright}>© 2022 All rights reserved</span>
            </div>
        </div>
    );
};

export default Footer;