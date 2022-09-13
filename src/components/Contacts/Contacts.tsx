import React from 'react';
import css from './Contacts.module.scss'
import Title from '../common/Title/Title';

const Contacts = () => {
    return (
        <section id="contacts" className="section">
            <div className="container">
                {/*<section id={'contacts'} className={css.contacts}>*/}
                {/*<div className={`${cssContainer.container} ${css.container}`}>*/}
                <Title title={'Contact me'}/>

                <div className={css.formContainer}>
                    <form action="/" className={css.form} method="">
                        <input type="text" placeholder={'Name'} required/>
                        <input type="text" placeholder={'Topic'} required/>
                        <textarea placeholder={'Text'} className={css.formTextarea} required/>
                        <button type="submit" className={'px-btn px-btn-white'}>Submit</button>
                        {/*<Button title={'submit'}/>*/}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contacts;