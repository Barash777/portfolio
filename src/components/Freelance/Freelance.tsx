import React from 'react';
import Title from '../common/Title/Title';
import Button from '../common/Button/Button';
import css from './Freelance.module.css'

const Freelance = () => {
    return (
        <section id="freelance" className="section">
            <div className="container">
                <Title title={'I\'m ready for freelance'}/>
                <div className={css.buttonContainer}>
                    <Button title={'Hire me'}/>
                </div>
            </div>
        </section>
    );
};

export default Freelance;