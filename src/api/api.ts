import emailjs from '@emailjs/browser';
import React from "react";

export const api = {
    sendEmail: (form: React.MutableRefObject<any>) => {
    // sendEmail: (data: FormDataType) => {
    // sendEmail: () => {
        console.log('we are here')
        // setIsSending(true)
        // setStatus('Sending')
        emailjs.sendForm('service_xpcumml', 'template_zex6ufn', form.current!, 'si30T-kEd_kjkWyc7')
            .then((result) => {
                console.log(result.text);
                // setStatus('Your message has been sent. Thank you.')
                setTimeout(() => {
                    // setIsSending(false)

                }, 2000)

            }, (error) => {
                console.log(error.text);
                // setStatus('Oops, something went wrong...')
                // setTimeout(() => {setIsSending(false)}, 2000)
            });
    }
}