import React from 'react';
import Title from '../common/Title/Title';
import todoImage from '../../assets/images/projects/m-portfolio-1.jpeg'
import socialImage from '../../assets/images/projects/m-portfolio-2.jpeg'
import counterImage from '../../assets/images/projects/m-portfolio-9.jpeg'
import ProjectItem from './ProjectItem';

/*const commonStyle = {
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
};*/

const Projects = () => {

    return (

        <section id="projects" className="section">
            <div className="container">
                <Title title={'Projects'}/>
                <div className={'row'}>
                    <ProjectItem image={todoImage} title={'social network'}/>
                    <ProjectItem image={counterImage} title={'todoasf'}/>
                    <ProjectItem image={socialImage} title={'todolist'}/>
                    <ProjectItem image={todoImage} title={'todozxcvzxcv'}/>
                    <ProjectItem image={socialImage} title={'todoeww'}/>
                    <ProjectItem image={todoImage} title={'todo'}/>
                    <ProjectItem image={counterImage} title={'todo'}/>
                    <ProjectItem image={socialImage} title={'todo'}/>
                </div>
            </div>
        </section>

    )
};

export default Projects;