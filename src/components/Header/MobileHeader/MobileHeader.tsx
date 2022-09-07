import React from 'react';

const MobileHeader = () => {
    return (
        <div className="mob-header">
            <div className="d-flex">
                {/*<div className="navbar-brand">
                        <a className="logo-text" href="../index.html">
                            Raquel
                        </a>
                    </div>*/}
                <button className="toggler-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    );
};

export default MobileHeader;