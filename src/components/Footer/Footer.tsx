import React from 'react';
// import css from './Footer.module.css'
// import cssContainer from '../../common/styles123/Container.module.css'

const Footer = () => {

    const currentYear = new Date().getFullYear()

    return (

        <footer className="footer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 m-20px-tb">
                        <div className="nav justify-content-center justify-content-md-start">
                            <a href="https://t.me/barash_777" target={'_blank'}><i className="fab fa-telegram"></i></a>
                            <a href="https://www.vk.com/id11616944" target={'_blank'}><i className="fab fa-vk"></i></a>
                            <a href="https://www.linkedin.com/in/siarhei-baranouski-83105a9b" target={'_blank'}><i
                                className="fab fa-linkedin-in"></i></a>
                            <a href="https://www.github.com/Barash777" target={'_blank'}><i
                                className="fab fa-github"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6 m-10px-tb text-center text-md-right">
                        <p>© {currentYear} copyright all right reserved</p>
                    </div>
                </div>
            </div>
        </footer>

        /*<footer className={'footer white'}>
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
        </footer>*/
    );
};

export default Footer;