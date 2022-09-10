import React from 'react';
import button from '../../common/styles123/Button.module.css'
import Title from '../../common/components/Title/Title';

const Freelance = () => {
    return (
        <section id="resume" className="section">
            <div className="container">
                <Title title={'I\'m ready for freelance'}/>
                <a href="#" className={button.button}>Hire me</a>
            </div>
        </section>
    );
};

export default Freelance;