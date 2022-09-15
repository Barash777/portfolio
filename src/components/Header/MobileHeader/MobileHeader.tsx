import React from 'react';

type MobileHeaderProps = {
    open: boolean,
    setOpen: (open: boolean) => void
}

const MobileHeader = (props: MobileHeaderProps) => {

    const onClickHandler = () => {
        props.setOpen(!props.open)
    }

    return (
        <div className="mob-header">
            <div className="d-flex">
                {/*<div className="navbar-brand">
                        <a className="logo-text" href="../index.html">
                            Raquel
                        </a>
                    </div>*/}
                <button className="toggler-menu" onClick={onClickHandler}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    );
};

export default MobileHeader;