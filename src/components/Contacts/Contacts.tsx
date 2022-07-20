import React from 'react';
import button from '../../common/styles/Button.module.css'
import css from './Contacts.module.css'
import cssContainer from '../../common/styles/Container.module.css'

const Contacts = () => {
    return (
        <div id={'contacts'} className={css.freelance}>
            <div className={`${cssContainer.container} ${css.container}`}>
                <h2 className={css.title}>Contact me</h2>
                <form action="/" className={css.form} method="">
                    <input type="text" placeholder={'Name'} required/>
                    <input type="text" placeholder={'Topic'} required/>
                    <textarea placeholder={'Text'} className={css.formTextarea} required/>
                    <input type="submit" className={button.button} value={'Submit'}/>
                </form>
            </div>
        </div>
    );
};

export default Contacts;