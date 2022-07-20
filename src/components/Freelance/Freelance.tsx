import React from 'react';
import button from '../../common/styles/Button.module.css'
import css from './Freelance.module.css'
import cssContainer from '../../common/styles/Container.module.css'

const Freelance = () => {
    return (
        <div className={css.freelance}>
            <div className={`${cssContainer.container} ${css.container}`}>
                <h2 className={css.title}>I'm ready for freelance</h2>
                <a href="#" className={button.button}>Hire me</a>
            </div>
        </div>
    );
};

export default Freelance;