import React from 'react';
import cssContainer from '../../common/styles/Container.module.css'
import css from './Projects.module.scss'
import ProjectItem from './ProjectItem/ProjectItem';
import Title from '../../common/components/Title/Title';
import todoImage from '../../assets/image/m-portfolio-1.jpeg'
import socialImage from '../../assets/image/m-portfolio-2.jpeg'
import counterImage from '../../assets/image/m-portfolio-9.jpeg'
import kabzdaImage from '../../assets/image/m-portfolio-1.jpeg'

const Projects = () => {

    const commonStyle = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }

    const todoStyle = {
        ...commonStyle,
        backgroundImage: `url(${todoImage})`,
    };
    const socialStyle = {
        ...commonStyle,
        backgroundImage: `url(${socialImage})`
    };
    const counterStyle = {
        ...commonStyle,
        backgroundImage: `url(${counterImage})`
    };

    return (
        <div id={'projects'} className={css.projects}>
            <div className={`${cssContainer.container} ${css.container}`}>
                <Title title={'Biography'}/>
                <div className={css.projectsList}>
                    <ProjectItem imgStyle={todoStyle} title={'Todolist'} description={'xcv'}/>
                    <ProjectItem imgStyle={socialStyle} title={'Social network'}
                                 description={'Lorem ipsum dolor sit ame, d est laborum. Lorem ipsum ' +
                                     'dolor sit ame, d est laborum. Lorem ipsum dolor sit ame, ' +
                                     'd est laborum. Lorem ipsum dolor sit ame, d est laborum. ' +
                                     'Lorem ipsum dolor sit ame, d est laborum. Lorem ipsum dolor ' +
                                     'sit ame, d est laborum. Lorem ipsum dolor sit ame, d est laborum. '}/>
                    <ProjectItem imgStyle={counterStyle} title={'Counter'}
                                 description={'Lorem ipsum dolor sit ame, d est laborum. ' +
                                     'Lorem ipsum dolor sit ame, d est laborum. Lorem ipsum ' +
                                     'dolor sit ame, d est laborum. Lorem ipsum dolor sit ame, ' +
                                     'd est laborum. Lorem ipsum dolor sit ame, d est laborum. ' +
                                     'Lorem ipsum dolor sit ame, d est laborum. Lorem ipsum ' +
                                     'dolor sit ame, d est laborum. '}/>
                    <ProjectItem title={'Kabzda'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;