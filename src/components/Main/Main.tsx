import React from 'react';
import css from './Main.module.css'
import cssContainer from '../../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={css.main}>
            <div className={cssContainer.container}>
                <div className={css.about}>
                    <span>Hi</span>
                    <h1>I am Siarhei Baranouski</h1>
                    <p>Frontend developer</p>
                </div>
                <div className={css.photo}></div>
            </div>
        </div>
    );
};

export default Main;