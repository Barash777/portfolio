import React from 'react';

const Footer = () => {

    const currentYear = new Date().getFullYear()

    return (

        <footer className="footer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 m-20px-tb">
                        <div className="nav justify-content-center justify-content-md-start">
                            <a href="https://t.me/barash_777" target={'_blank'} rel="noreferrer"><i
                                className="fab fa-telegram"></i></a>
                            <a href="https://www.vk.com/id11616944" target={'_blank'} rel="noreferrer"><i
                                className="fab fa-vk"></i></a>
                            <a href="https://www.linkedin.com/in/siarhei-baranouski-83105a9b" target={'_blank'}
                               rel="noreferrer"><i
                                className="fab fa-linkedin-in"></i></a>
                            <a href="https://www.github.com/Barash777" target={'_blank'} rel="noreferrer"><i
                                className="fab fa-github"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6 m-10px-tb text-center text-md-right">
                        <p>© {currentYear} copyright all right reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;