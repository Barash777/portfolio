import React from 'react';
import avatar from '../../assets/images/portfolio-avatar.jpg'
import freelancer from '../../assets/images/logos/freelancer.png'
import codewars from '../../assets/images/logos/codewars.png'
import Title from '../common/Title/Title';

const myBirthday = new Date('Oct 02 1989')

function getAge(birthday: Date = myBirthday) {
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const About = () => {

    return (
        <section id={'about'} className={'section'}>
            <div className={'container'}>

                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="about-me">
                            <div className="img">
                                <div className="img-in">
                                    <img src={avatar} title="photo" alt="avatar"/>
                                </div>
                                <div className="nav social-icons justify-content-center">
                                    <a href="https://github.com/Barash777" target={'_blank'} rel="noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="https://www.freelancer.com/u/Barash777" target={'_blank'} rel="noreferrer">
                                        <i className={'fab'}>
                                            <img
                                                // className={'img-about'}
                                                src={freelancer}
                                                title="freelancer"
                                                alt="freelancer"
                                            />
                                        </i>
                                    </a>
                                    <a href="https://www.codewars.com/users/Barash777" target={'_blank'}
                                       rel="noreferrer">
                                        {/*<i>Mql</i>*/}
                                        <i className={'fab'}>
                                            <img
                                                className={'img-about'}
                                                src={codewars}
                                                title="codewars"
                                                alt="codewars"
                                            />
                                        </i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/siarhei-baranouski-83105a9b" target={'_blank'}
                                       rel="noreferrer">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="https://www.vk.com/id11616944" target={'_blank'} rel="noreferrer">
                                        <i className="fab fa-vk"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="info">
                                <p>Front-end Developer</p>
                                <h3>Siarhei Baranouski</h3>
                                <div className="btn-bar">
                                    <a className="underline" href="#" target={'_blank'} rel="noreferrer">Donwload CV</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-7 ml-auto">
                        <div className="about-info">
                            <Title title={'About me'}/>
                            <div className="about-text">
                                <p>Hi. I'm from Belarus. I'm experienced programmer with more than 10 years of
                                    experience with
                                    developing trade robots and indicators. Cause of sanctions I was need to
                                    change my field of activity and start a new part of my life.</p>
                                <p>Now I'm a beginner Front-end Developer with 1 year of experience. I code and create
                                    web elements on React. Using Redux and TS in my projects. I had some part-time paid
                                    works, mostly on freelance</p>
                                <p>I have great accounts on mql5.com, freelancer.com and upwork.com, but last company
                                    has
                                    suspended my account cause I'm from Belarus and right now I can't show you it,
                                    but you can be sure my rating is almost 5 stars there</p>

                                <div>
                                    <a className="underline" href="https://www.freelancer.com/u/Barash777"
                                       target={'_blank'} rel="noreferrer">My Freelancer.com account</a>
                                </div>
                                <div>
                                    <a className="underline" href="https://www.mql5.com/ru/users/barash777"
                                       target={'_blank'} rel="noreferrer">My MQL5.com account</a>
                                </div>

                                <div className={'pt-3'}>
                                    <p>I'll be happy to make some great projects for you!</p>
                                </div>


                            </div>
                            <div className="info-list">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <ul>
                                            <li>
                                                <label>Name: </label>
                                                <span>Siarhei Baranouski</span>
                                            </li>
                                            <li>
                                                <label>Birthday: </label>
                                                <span>2nd October 1989</span>
                                            </li>
                                            <li>
                                                <label>Age: </label>
                                                <span>{getAge()} years</span>
                                            </li>
                                            <li>
                                                <label>Address: </label>
                                                <span>Belarus, Kalinkovichi</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6">
                                        <ul>
                                            <li>
                                                <label>Phone: </label>
                                                <span>(+375) 29 536 05 81</span>
                                            </li>
                                            <li>
                                                <label>Email: </label>
                                                <span>barash.vertihvost@gmail.com</span>
                                            </li>
                                            <li>
                                                <label>Telegram: </label>
                                                <span>
                                                    <a className="underline"
                                                       href="https://t.me/barash_777"
                                                       target={'_blank'}
                                                       rel="noreferrer">
                                                        @Barash_777
                                                    </a>
                                                </span>
                                            </li>
                                            <li>
                                                <label>Freelance: </label>
                                                <span>Available</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;