import React from 'react';

type ItemPropsType = {
    title: string
    image: string
    demo?: string
    source?: string
}

const ProjectItem = ({title, image, demo, source}: ItemPropsType) => {

    return (
        <div className="col-sm-6 col-lg-4 portfolio-box-01">
            <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">{title}</h5>
                <div className="row">
                    <a className="col underline" href={demo ?? '#'} target={'_blank'} rel="noreferrer">Demo</a>
                    <a className="col underline" href={source ?? '#'} target={'_blank'} rel="noreferrer">Source</a>
                </div>
            </div>
            <div className="portfolio-img">
                <img className={'img-center'} src={image} alt={title}/>
            </div>
        </div>
    );
};

export default ProjectItem;