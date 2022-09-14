import React from 'react';

type TitlePropsType = {
    title: string
}

const Title = ({title}: TitlePropsType) => {
    return (
        <div className="title">
            <h3>{title}</h3>
        </div>
    );
};

export default Title;