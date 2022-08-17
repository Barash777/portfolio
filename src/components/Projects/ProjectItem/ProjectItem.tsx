import React from 'react';
import button from '../../../common/styles/Button.module.css'
import css from './ProjectItem.module.scss'

export type ProjectItemPropsType = {
    // img?: string
    title?: string
    description?: string
    imgStyle?: any
}

const ProjectItem = (props: ProjectItemPropsType) => {

    const testStyle = {
        zIndex: 1
    }

    return (
        <div className={css.item}>
            <div className={css.imgContainer}>
                <div className={css.img} style={props.imgStyle}>
                    <a href="#" style={testStyle} className={button.button}>Show</a>
                </div>
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