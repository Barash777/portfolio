import React, {useRef} from 'react';
import css from './Contacts.module.scss'
import Title from '../common/Title/Title';
import {useForm, SubmitHandler} from 'react-hook-form';
import {api} from "../../api/api";

export type FormDataType = {
    name: string
    topic: string
    text: string
}

const Contacts = () => {
    const form = useRef();

    const {register, handleSubmit, formState: {errors}} = useForm<FormDataType>();
    const onSubmit: SubmitHandler<FormDataType> = (data) => {
        // props.login(data.email, data.password, data.rememberMe, data.captcha)
        api.sendEmail(form);
    }



    return (
        <section id="contacts" className="section">
            <div className="container">
                {/*<section id={'contacts'} className={css.contacts}>*/}
                {/*<div className={`${cssContainer.container} ${css.container}`}>*/}
                <Title title={'Contact me'}/>

                <div className={css.formContainer}>
                    <form onSubmit={handleSubmit(onSubmit/*, test*/)} className={css.form}
                          // @ts-ignore
                          ref={form}
                    >
                        <input name={'name'} type="text" placeholder={'Name'} required/>
                        <input name={'topic'} type="text" placeholder={'Topic'} required/>
                        <textarea name={'text'} placeholder={'Text'} className={css.formTextarea} required/>
                        <button type="submit" className={'px-btn px-btn-white'}>Submit</button>
                        {/*<Button title={'submit'}/>*/}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contacts;