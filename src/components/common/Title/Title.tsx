import React from 'react';
// import css from './Title.module.scss';

type TitlePropsType = {
    title: string
}

const Title = ({title}: TitlePropsType) => {
    return (
        // <div className={css.title}>
        //     <h2>{title}</h2>
        // </div>
        // <div className="container">
        <div className="title">
            <h3>{title}</h3>
        </div>
        // </div>
    );
};

export default Title;