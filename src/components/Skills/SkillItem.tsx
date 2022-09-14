import React from 'react';

type SkillPropsType = {
    title: string
    path?: string
    description?: string
}

const SkillItem = ({title, path, description}: SkillPropsType) => {
    return (
        <div className="col-lg-4 m-15px-tb">
            <div className="feature-box-01">
                <div className={'row justify-content-around align-items-center'}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img"
                         viewBox="0 0 24 24"
                         height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><title></title>
                        <path
                            d={path}></path>
                    </svg>
                    <h2>{title}</h2>
                </div>

                {description && <div className="feature-content">
                    <p>{description}</p>
                </div>}
            </div>
        </div>
    );
};

export default SkillItem;