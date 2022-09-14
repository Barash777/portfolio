import React from 'react';
import SkillItem from './SkillItem';
import Title from '../common/Title/Title';
import {svgPaths} from '../../assets/image/svgPaths';

const Skills = () => {
    return (
        <section id={'skills'} className={'section'}>
            <div className={'container'}>
                <Title title={'Skills'}/>
                <div className="row">
                    <SkillItem title={'React'} path={svgPaths.react}/>
                    <SkillItem title={'Redux'} path={svgPaths.redux}/>
                    <SkillItem title={'TypeScript'} path={svgPaths.ts}/>
                    <SkillItem title={'Storybook'} path={svgPaths.storybook}/>
                    <SkillItem title={'Jest'} path={svgPaths.jest}/>
                    <SkillItem title={'Formik'} path={svgPaths.formik}/>
                    <SkillItem title={'React hook form'}/>
                    {/*<SkillItem title={'Reselect'}/>*/}
                    <SkillItem title={'Material UI'} path={svgPaths.mui}/>
                    <SkillItem title={'Git'} path={svgPaths.git}/>
                    <SkillItem title={'Axios'}/>
                    <SkillItem title={'Bootstrap'}/>
                    <SkillItem title={'Tailwind'} path={svgPaths.tailwind}/>
                    {/*<SkillItem title={'ReactNative'}/>*/}
                </div>
            </div>
        </section>
    );
};

export default Skills;