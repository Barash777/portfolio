import React from 'react';
import cssContainer from '../../common/styles/Container.module.css'
import css from './Header.module.css'
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <div className={css.header}>
            <div className={`${cssContainer.container} ${css.container}`}>
                <Navigation/>
            </div>
        </div>
    );
};

export default Header;