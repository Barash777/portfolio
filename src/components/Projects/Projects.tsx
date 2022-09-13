import React from 'react';
import css from './Projects.module.scss'
import ProjectItem from './ProjectItem/ProjectItem';
import Title from '../common/Title/Title';
import todoImage from '../../assets/image/m-portfolio-1.jpeg'
import socialImage from '../../assets/image/m-portfolio-2.jpeg'
import counterImage from '../../assets/image/m-portfolio-9.jpeg'
import Button from '../common/Button/Button';
import Item from './Item';
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

        <section id="work" className="section">
            <div className="container">
                <Title title={'Projects'}/>

                <div className="portfolio-content grid-gutter-lg grid-col-3"
                    // style="position: relative; height: 1206.34px;"
                    //  style={{position: 'relative', minHeight: '1000px'}}
                >

                    <Item image={todoImage}/>
                    <Item image={socialImage}/>
                    <Item image={counterImage}/>
                    <Item image={todoImage}/>
                    <Item image={socialImage}/>
                    <Item image={counterImage}/>
                    <Item image={todoImage}/>

                </div>
            </div>
        </section>

    )

    /*return (
        <>
            <section id="work" className="section">
                <div className="container">
                    <Title title={'Projects'}/>
                    <div className="portfolio-filter-01">
                        <ul className="filter nav">
                            <li className="active" data-filter="*">All</li>
                            <li data-filter=".branding" className="">Branding</li>
                            <li data-filter=".photoshop" className="">Photoshop</li>
                            <li data-filter=".fashion" className="">Fashion</li>
                            <li data-filter=".product" className="">Product</li>
                        </ul>
                    </div>

                    <div className="portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery"
                        // style="position: relative; height: 1206.34px;"
                         style={{position: 'relative', minHeight: '1000px'}}
                    >
                        <div className="grid-item product branding fashion"
                            // style="position: absolute; left: 0px; top: 0px;"
                            //  style={{position: 'absolute', left: '0px', top: '0px'}}
                        >
                            <div className="portfolio-box-01">
                                <div className="portfolio-info">
                                    <h5 className="white-color font-weight-bold">Momb ios App</h5>
                                    <span>Broadcasting ios App</span>
                                </div>
                                <div className="portfolio-img">
                                    <img src={todoImage} title="" alt=""/>
                                    <div className="portfolio-icon">
                                        <a href="static/img/m-portfolio-1.jpg" className="gallery-link">
                                            <span className="ti-plus"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid-item photoshop"
                            // style="position: absolute; left: 298px; top: 0px;"
                        >
                            <div className="portfolio-box-01">
                                <div className="portfolio-info">
                                    <h5 className="white-color font-weight-bold">Momb ios App</h5>
                                    <span>Broadcasting ios App</span>
                                </div>
                                <div className="portfolio-img">
                                    <img src={socialImage} title="" alt=""/>
                                    <div className="portfolio-icon">
                                        <a href="static/img/m-portfolio-2.jpg" className="gallery-link">
                                            <span className="ti-plus"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid-item product branding"
                            // style="position: absolute; left: 597px; top: 0px;"
                        >
                            <div className="portfolio-box-01">
                                <div className="portfolio-info">
                                    <h5 className="white-color font-weight-bold">Momb ios App</h5>
                                    <span>Broadcasting ios App</span>
                                </div>
                                <div className="portfolio-img">
                                    <img src={counterImage} title="" alt=""/>
                                    <div className="portfolio-icon">
                                        <a href="static/img/m-portfolio-3.jpg" className="gallery-link">
                                            <span className="ti-plus"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid-item product photoshop"
                            // style="position: absolute; left: 298px; top: 298px;"
                        >
                            <div className="portfolio-box-01">
                                <div className="portfolio-info">
                                    <h5 className="white-color font-weight-bold">Momb ios App</h5>
                                    <span>Broadcasting ios App</span>
                                </div>
                                <div className="portfolio-img">
                                    <img src={counterImage} title="" alt=""/>
                                    <div className="portfolio-icon">
                                        <a href="static/img/m-portfolio-5.jpg" className="gallery-link">
                                            <span className="ti-plus"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid-item branding"
                            // style="position: absolute; left: 0px; top: 402px;"
                        >
                            <div className="portfolio-box-01">
                                <div className="portfolio-info">
                                    <h5 className="white-color font-weight-bold">Momb ios App</h5>
                                    <span>Broadcasting ios App</span>
                                </div>
                                <div className="portfolio-img">
                                    <img src={todoImage} title="" alt=""/>
                                    <div className="portfolio-icon">
                                        <a href="static/img/m-portfolio-4.jpg" className="gallery-link">
                                            <span className="ti-plus"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid-item product photoshop"
                            // style="position: absolute; left: 597px; top: 505px;"
                        >
                            <div className="portfolio-box-01">
                                <div className="portfolio-info">
                                    <h5 className="white-color font-weight-bold">Momb ios App</h5>
                                    <span>Broadcasting ios App</span>
                                </div>
                                <div className="portfolio-img">
                                    <img src={todoImage} title="" alt=""/>
                                    <div className="portfolio-icon">
                                        <a href="static/img/m-portfolio-6.jpg" className="gallery-link">
                                            <span className="ti-plus"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid-item fashion"
                            // style="position: absolute; left: 0px; top: 701px;"
                        >
                            <div className="portfolio-box-01">
                                <div className="portfolio-info">
                                    <h5 className="white-color font-weight-bold">Momb ios App</h5>
                                    <span>Broadcasting ios App</span>
                                </div>
                                <div className="portfolio-img">
                                    <img src={todoImage} title="" alt=""/>
                                    <div className="portfolio-icon">
                                        <a href="static/img/m-portfolio-7.jpg" className="gallery-link">
                                            <span className="ti-plus"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid-item product branding"
                            // style="position: absolute; left: 298px; top: 804px;"
                        >
                            <div className="portfolio-box-01">
                                <div className="portfolio-info">
                                    <h5 className="white-color font-weight-bold">Momb ios App</h5>
                                    <span>Broadcasting ios App</span>
                                </div>
                                <div className="portfolio-img">
                                    <img src={todoImage} title="" alt=""/>
                                    <div className="portfolio-icon">
                                        <a href="static/img/m-portfolio-8.jpg" className="gallery-link">
                                            <span className="ti-plus"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid-item fashion"
                            // style="position: absolute; left: 597px; top: 907px;"
                        >
                            <div className="portfolio-box-01">
                                <div className="portfolio-info">
                                    <h5 className="white-color font-weight-bold">Momb ios App</h5>
                                    <span>Broadcasting ios App</span>
                                </div>
                                <div className="portfolio-img">
                                    <img src={todoImage} title="" alt=""/>
                                    <div className="portfolio-icon">
                                        <a href="static/img/m-portfolio-9.jpg" className="gallery-link">
                                            <span className="ti-plus"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )*/

    /*return (
        <section id="resume" className="section">
            <div className="container">
                {/!*<div id={'projects'} className={css.projects}>*!/}
                {/!*    <div className={`${cssContainer.container} ${css.container}`}>*!/}
                <Title title={'Projects'}/>
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
    );*/
};

export default Projects;