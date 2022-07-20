import React from 'react';
import cssContainer from '../../common/styles/Container.module.css'
import css from './Projects.module.css'
import ProjectItem from './ProjectItem/ProjectItem';

const Projects = () => {
    return (
        <div id={'projects'} className={css.projects}>
            <div className={`${cssContainer.container} ${css.container}`}>
                <h2 className={css.title}>Projects</h2>
                <div className={css.projectsList}>
                    <ProjectItem img={'logo'} title={'Todolist'} description={'xcv'}/>
                    <ProjectItem title={'Social network'}
                                 description={'Lorem ipsum dolor sit ame, d est laborum. Lorem ipsum ' +
                                     'dolor sit ame, d est laborum. Lorem ipsum dolor sit ame, ' +
                                     'd est laborum. Lorem ipsum dolor sit ame, d est laborum. ' +
                                     'Lorem ipsum dolor sit ame, d est laborum. Lorem ipsum dolor ' +
                                     'sit ame, d est laborum. Lorem ipsum dolor sit ame, d est laborum. '}/>
                    <ProjectItem title={'Counter'}
                                 description={'Lorem ipsum dolor sit ame, d est laborum. ' +
                                     'Lorem ipsum dolor sit ame, d est laborum. Lorem ipsum ' +
                                     'dolor sit ame, d est laborum. Lorem ipsum dolor sit ame, ' +
                                     'd est laborum. Lorem ipsum dolor sit ame, d est laborum. ' +
                                     'Lorem ipsum dolor sit ame, d est laborum. Lorem ipsum ' +
                                     'dolor sit ame, d est laborum. '}/>
                    <ProjectItem img={'logo'} title={'Kabzda'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;