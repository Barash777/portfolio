import React from 'react';
import button from '../../common/styles123/Button.module.css'
import cssContainer from '../../common/styles123/Container.module.css'
import css from './Contacts.module.scss'
import Title from '../../common/components/Title/Title';

const Contacts = () => {
    return (
        <div id={'contacts'} className={css.contacts}>
            <div className={`${cssContainer.container} ${css.container}`}>
                <Title title={'Contact me'}/>

                <form action="/" className={css.form} method="">
                    <input type="text" placeholder={'Name'} required/>
                    <input type="text" placeholder={'Topic'} required/>
                    <textarea placeholder={'Text'} className={css.formTextarea} required/>
                    <button type="submit" className={button.button}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;