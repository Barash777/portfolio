import React from 'react';
import button from '../../common/styles123/Button.module.css'
import css from './Freelance.module.css'
import cssContainer from '../../common/styles123/Container.module.css'
import Title from '../../common/components/Title/Title';

const Freelance = () => {
    return (
        <div className={css.freelance}>
            <div className={`${cssContainer.container} ${css.container}`}>
                {/*<h2 className={css.title}>I'm ready for freelance</h2>*/}
                <Title title={'I\'m ready for freelance'}/>
                <a href="#" className={button.button}>Hire me</a>
            </div>
        </div>
    );
};

export default Freelance;