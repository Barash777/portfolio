import React from 'react';
import cssContainer from '../../common/styles/Container.module.css'
import css from './Skills.module.css'
import SkillItem from './SkillItem/SkillItem';
import Title from '../../common/components/Title/Title';

const Skills = () => {
    return (
        <div id={'skills'} className={css.skills}>
            <div className={`${cssContainer.container} ${css.container}`}>
                {/*<div className={`${cssContainer.container}`}>*/}
                {/*<h2 className={css.title}>Skills</h2>*/}
                <Title title={'Skills'}/>
                <div className={css.skillsList}>
                    <SkillItem title={'HTML & CSS'}/>
                    <SkillItem img={'jsLogo'} title={'JS'} description={'xcv'}/>
                    <SkillItem img={'logo'} title={'React'}
                               description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                                   'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
                                   'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
                                   'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
                                   'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}/>
                    <SkillItem img={'logo'} title={'Vue'} description={'test'}/>
                    <SkillItem img={'logo'} title={'Laravel'} description={'x xc sd 1cv'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;