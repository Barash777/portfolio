import React from 'react';

type ButtonPropsType = {
    title: string
    href?: string
    onClick?: () => void
}

const Button = ({title, href, onClick}: ButtonPropsType) => {
    return (
        <a className="px-btn px-btn-white" href={href ?? '#'} onClick={onClick}>{title}</a>
    );
};

export default Button;