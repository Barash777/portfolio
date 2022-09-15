import React from 'react';
import SkillItem from './SkillItem';
import Title from '../common/Title/Title';
// import {svgPaths} from '../../assets/images/logos/svgPaths';
// import reactLogo from '../../assets/images/logos/react-2.svg'
import {
    axiosLogo,
    bootstrapLogo,
    formikLogo, gitLogo,
    jestLogo,
    muiLogo, reactHookFormLogo,
    reactLogo,
    reduxLogo,
    storybookLogo,
    tailwindLogo,
    tsLogo
} from '../../assets/images/logos/svgLogos';

const Skills = () => {

    return (
        <section id={'skills'} className={'section'}>
            <div className={'container'}>
                <Title title={'Skills'}/>
                <div className="row">
                    <SkillItem title={'React'} image={reactLogo}/>
                    <SkillItem title={'Redux'} image={reduxLogo}/>
                    <SkillItem title={'TypeScript'} image={tsLogo}/>
                    <SkillItem title={'Storybook'} image={storybookLogo}/>
                    <SkillItem title={'Jest'} image={jestLogo}/>
                    <SkillItem title={'Formik'} image={formikLogo}/>
                    <SkillItem title={'React Hook Form'} image={reactHookFormLogo}/>
                    {/*<SkillItem title={'Reselect'}/>*/}
                    <SkillItem title={'Material UI'} image={muiLogo}/>
                    <SkillItem title={'Git'} image={gitLogo}/>
                    <SkillItem title={'Axios'} image={axiosLogo}/>
                    <SkillItem title={'Bootstrap'} image={bootstrapLogo}/>
                    <SkillItem title={'Tailwind'} image={tailwindLogo}/>
                    {/*<SkillItem title={'ReactNative'}/>*/}
                </div>
            </div>
        </section>
    );
};

export default Skills;