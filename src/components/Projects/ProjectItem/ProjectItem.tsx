import React from 'react';
import button from '../../../common/styles/Button.module.css'
import css from './ProjectItem.module.css'

export type ProjectItemPropsType = {
    img?: string
    title?: string
    description?: string
}

const ProjectItem = (props: ProjectItemPropsType) => {
    return (
        <div className={css.item}>
            <div className={css.imgContainer}>
                <a href="#" className={button.button}>Show</a>
            </div>
            <div className={css.descriptionContainer}>
                <span className={css.title}>{props.title ? props.title : 'TITLE'}</span>
                <span className={css.description}>
                {props.description ? props.description : 'Lorem ipsum' +
                    ' dolor sit amet, consectetur adipisicing elit. Accusantium, ' +
                    'adipisci animi architecto aspernatur commodi dolore excepturi ' +
                    'facilis ipsum nisi odit, officiis quia, quidem quod recusandae ' +
                    'rem sit tempore? Minus, molestias!'}
            </span>
            </div>

        </div>
    );
};

export default ProjectItem;