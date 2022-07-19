import React from 'react';
import css from './SkillItem.module.css'

export type SkillItemPropsType = {
    img?: string
    title?: string
    description?: string
}

const SkillItem = (props: SkillItemPropsType) => {
    return (
        <div className={css.skill}>
            <div className={css.icon}>
                {props.img ? props.img : 'logo'}
            </div>
            <h3>{props.title ? props.title : 'TITLE'}</h3>
            <span className={css.description}>
                {props.description ? props.description : 'Lorem ipsum' +
                    ' dolor sit amet, consectetur adipisicing elit. Accusantium, ' +
                    'adipisci animi architecto aspernatur commodi dolore excepturi ' +
                    'facilis ipsum nisi odit, officiis quia, quidem quod recusandae ' +
                    'rem sit tempore? Minus, molestias!'}
            </span>
        </div>
    );
};

export default SkillItem;