import emailjs from '@emailjs/browser';
import {FormDataType} from "../components/Contacts/Contacts";

export const api = {
    sendEmail: (data: FormDataType) => {
        console.log('we are here')
        console.log(data)
        emailjs.send('service_xpcumml', 'template_zex6ufn', data, 'si30T-kEd_kjkWyc7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
}