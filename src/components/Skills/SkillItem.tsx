import React from 'react';

type SkillPropsType = {
    title: string
    description?: string
    image?: any
}

const SkillItem = ({title, description, image}: SkillPropsType) => {

    // const imageSize = '3em'

    return (
        <div className="col-md-6 m-15px-tb">
            <div className="feature-box-01">
                <div className={'row justify-content-between align-items-center'}>
                    <div className={'col'}>
                        {image && image}
                    </div>
                    <div className={'col-auto'}>
                        <h3>{title}</h3>
                    </div>

                </div>
                {description && <div className="feature-content">
                    <p>{description}</p>
                </div>}
            </div>
        </div>
    );
};

export default SkillItem;