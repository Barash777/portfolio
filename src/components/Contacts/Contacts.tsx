import React from 'react';
import css from './Contacts.module.scss'
import Title from '../common/Title/Title';
import {useForm, SubmitHandler} from 'react-hook-form';
import {api} from "../../api/api";
import { Store } from 'react-notifications-component';

export type FormDataType = {
    name: string
    topic: string
    text: string
}

const showSuccessNotification = () => {
    Store.addNotification({
        title: "Great!",
        message: "You sent the message. I'll write to you ASAP",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 5000,
            onScreen: true
        }
    });
}

const showErrorNotification = () => {
    Store.addNotification({
        title: "Error!",
        message: "Something went wrong, please, try again later...",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 5000,
            onScreen: true
        }
    });
}

const Contacts = () => {

    const {register, handleSubmit, reset} = useForm<FormDataType>();
    const onSubmit: SubmitHandler<FormDataType> = async (data) => {
        const res = await api.sendEmail(data);
        if (res) {
            reset();
            showSuccessNotification()
        }
        else {
            showErrorNotification()
        }
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