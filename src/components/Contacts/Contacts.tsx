import React from 'react';
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

    const {register, handleSubmit, reset} = useForm<FormDataType>();
    const onSubmit: SubmitHandler<FormDataType> = (data) => {
        api.sendEmail(data);
        reset();
    }

    return (
        <section id="contacts" className="section">
            <div className="container">
                <Title title={'Contact me'}/>

                <div className={css.formContainer}>
                    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
                        <input {...register('name')} type="text" placeholder={'Name'} required/>
                        <input {...register('topic')} type="text" placeholder={'Topic'} required/>
                        <textarea {...register('text')} placeholder={'Text'} className={css.formTextarea} required/>
                        <button type="submit" className={'px-btn px-btn-white'}>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contacts;