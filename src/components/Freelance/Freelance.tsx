import React from 'react';
// import button from '../common/styles123/Button.module.css'
import Title from '../common/Title/Title';
import Button from '../common/Button/Button';
import css from './Freelance.module.css'

const Freelance = () => {
    return (
        <section id="freelance" className="section">
            <div className="container">
                <Title title={'I\'m ready for freelance'}/>
                {/*<a href="#" className={button.button}>Hire me</a>*/}
                <div className={css.buttonContainer}>
                    <Button title={'Hire me'} href={'https://www.google.com'}/>
                </div>
            </div>
        </section>
    );
};

export default Freelance;