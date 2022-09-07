import React from 'react';
import css from './Projects.module.scss'
import ProjectItem from './ProjectItem/ProjectItem';
import Title from '../../common/components/Title/Title';
import todoImage from '../../assets/image/m-portfolio-1.jpeg'
import socialImage from '../../assets/image/m-portfolio-2.jpeg'
import counterImage from '../../assets/image/m-portfolio-9.jpeg'
// import kabzdaImage from '../../assets/image/m-portfolio-1.jpeg'

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

const Projects = () => {


    return (
        <section id="resume" className="section">
            <div className="container">
                {/*<div id={'projects'} className={css.projects}>*/}
                {/*    <div className={`${cssContainer.container} ${css.container}`}>*/}
                <Title title={'Projects'}/>
                <div>
                    <a className="px-btn px-btn-white" href="#">More Blogs</a>
                </div>

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
        </section>
    );
};

export default Projects;