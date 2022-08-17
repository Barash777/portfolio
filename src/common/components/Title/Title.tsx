import React from 'react';
import css from './Title.module.scss';

type TitlePropsType = {
    title: string
}

const Title = ({title}: TitlePropsType) => {
    return (
        <div className={css.title}>
            <h2>{title}</h2>
        </div>
    );
};

export default Title;