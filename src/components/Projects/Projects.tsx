import React from 'react';
import Title from '../common/Title/Title';
import todoImage from '../../assets/images/projects/todolist3.jpeg'
import socialImage from '../../assets/images/projects/social network.jpeg'
import cardsImage from '../../assets/images/projects/cards3.jpeg'
import ProjectItem from './ProjectItem';

const Projects = () => {

    return (

        <section id="projects" className="section">
            <div className="container">
                <Title title={'Projects'}/>
                <div className={'row'}>
                    <ProjectItem
                        image={socialImage}
                        title={'social network'}
                        demo={'https://barash777.github.io/samurai-way'}
                        source={'https://github.com/Barash777/samurai-way'}
                    />
                    <ProjectItem
                        image={todoImage}
                        title={'todolist'}
                        demo={'https://barash777.github.io/todolist'}
                        source={'https://github.com/Barash777/todolist'}
                    />
                    <ProjectItem
                        image={cardsImage}
                        title={'learn cards (team project)'}
                        demo={'https://ticket1201.github.io/cards_quiz'}
                        source={'https://github.com/ticket1201/cards_quiz'}
                    />
                </div>
            </div>
        </section>

    )
};

export default Projects;