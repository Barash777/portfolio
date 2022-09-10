import React from 'react';
import css from './Main.module.css'
// import cssContainer from '../../common/styles123/Container.module.css'

const About = () => {
    return (
        <section id={'about'} className={'section'}>
            <div className={'container'}>
                <div className={css.about}>
                    <span>Hi</span>
                    <h1>I am Siarhei Baranouski</h1>
                    <p>Frontend developer</p>
                </div>
                <div className={css.photo}></div>
            </div>
        </section>
    );
};

export default About;