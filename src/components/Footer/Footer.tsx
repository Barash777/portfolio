import React from 'react';
import css from './Footer.module.css'
// import cssContainer from '../../common/styles123/Container.module.css'

const Footer = () => {
    return (
        <footer className={'footer white'}>
            <div className={'container'}>
                <h2 className={css.title}>Siarhei Baranouski</h2>
                <div className={css.socials}>
                    <div className={css.icon}></div>
                    <div className={css.icon}></div>
                    <div className={css.icon}></div>
                    <div className={css.icon}></div>
                </div>
                <span className={css.copyright}>© 2022 All rights reserved</span>
            </div>
        </footer>
    );
};

export default Footer;