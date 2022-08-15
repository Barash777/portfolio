import React from 'react';
import button from '../../common/styles/Button.module.css'
import cssContainer from '../../common/styles/Container.module.css'
import css from './Contacts.module.css'

const Contacts = () => {
    return (
        <div id={'contacts'} className={css.freelance}>
            <div className={`${cssContainer.container} ${css.container}`}>
                {/*<div style={{position: 'absolute'}}><h2 className={css.title}>Contact me <span
                    className={css.bg}>test</span></h2></div>*/}
                <h2 className={css.title}>Contact me
                    {/*<span className={css.bg}>test</span>*/}
                </h2>

                <form action="/" className={css.form} method="">
                    <input type="text" placeholder={'Name'} required/>
                    <input type="text" placeholder={'Topic'} required/>
                    <textarea placeholder={'Text'} className={css.formTextarea} required/>
                    {/*<input type="submit" className={button.button} value={'Submit'}/>*/}
                    <button type="submit" className={button.button}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;