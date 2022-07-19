import React from 'react';
import cssContainer from '../../common/styles/Container.module.css'
import css from './Skills.module.css'
import SkillItem from './SkillItem/SkillItem';

const Skills = () => {
    return (
        <div className={css.skills}>
            <div className={`${cssContainer.container} ${css.container}`}>
                {/*<div className={`${cssContainer.container}`}>*/}
                <h2 className={css.title}>Skills</h2>
                <div className={css.skillsList}>
                    <SkillItem title={'HTML & CSS'} description={'xcv'}/>
                    <SkillItem img={'imgForJS'} title={'JS'}/>
                    <SkillItem img={'imgForNothing'} description={'sadf eqw '}/>
                    {/*<SkillItem img={'/'} title={'4'} description={'xvcxasdf cv'}/>*/}
                    {/*<SkillItem img={'/'} title={'5'} description={'x xc sd 1cv'}/>*/}
                    {/*<SkillItem img={'/'} title={'6'} description={'asd ascx s'}/>*/}
                </div>

            </div>
        </div>
    );
};

export default Skills;