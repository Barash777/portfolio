import React from 'react';
import avatar from '../../assets/image/avatar_enot.jpeg'
// import upwork from '../../assets/image/upwork.webp'
// import freelancer from '../../assets/image/freelancer.webp.png'
import freelancer from '../../assets/image/oie_transparent.png'
import codewars from '../../assets/image/codewars trans.png'
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
                                    <img src={avatar} title="photo" alt="photo"/>
                                </div>
                                <div className="nav social-icons justify-content-center">
                                    <a href="https://github.com/Barash777" target={'blank'}>
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="https://www.freelancer.com/u/Barash777" target={'blank'}>
                                        <i className={'fab'}>
                                            <img
                                                // className={'img-about'}
                                                src={freelancer}
                                                title="freelancer"
                                                alt="freelancer"
                                            />
                                        </i>
                                    </a>
                                    <a href="https://www.codewars.com/users/Barash777" target={'blank'}>
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
                                    <a href="https://www.linkedin.com/in/siarhei-baranouski-83105a9b/" target={'blank'}>
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="https://t.me/barash_777" target={'blank'}>
                                        <i className="fab fa-telegram"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="info">
                                <p>Front-end Developer</p>
                                <h3>Siarhei Baranouski</h3>
                                <div className="btn-bar">
                                    <a className="underline" href="#">Donwload CV</a>
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
                                       target={'blank'}>My Freelancer.com account</a>
                                </div>
                                <div>
                                    <a className="underline" href="https://www.mql5.com/ru/users/barash777"
                                       target={'blank'}>My MQL5.com account</a>
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
                                                <span>@Barash_777</span>
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

                {/*<div className="separated"></div>

                    <div className="title">
                        <h3>What I do?</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 m-15px-tb">
                            <div className="feature-box-01">
                                <i className="icon theme-bg icon-mobile"></i>
                                <div className="feature-content">
                                    <h5>Web Design</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 m-15px-tb">
                            <div className="feature-box-01">
                                <i className="icon theme-bg icon-desktop"></i>
                                <div className="feature-content">
                                    <h5>Web Development</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 m-15px-tb">
                            <div className="feature-box-01">
                                <i className="icon theme-bg icon-target"></i>
                                <div className="feature-content">
                                    <h5>SEO Marketing</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="separated"></div>

                    <div className="title">
                        <h3>Awards.</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 m-15px-tb">
                            <div className="feature-box-02 media align-items-center">
                                <div className="icon">
                                    <img src="static/img/a1.png" title="" alt="" />
                                </div>
                                <div className="media-body">
                                    <h6>Honorable mension</h6>
                                    <p>Site of the day</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 m-15px-tb">
                            <div className="feature-box-02 media align-items-center">
                                <div className="icon">
                                    <img src="static/img/a2.png" title="" alt="" />
                                </div>
                                <div className="media-body">
                                    <h6>Honorable mension</h6>
                                    <p>Site of the day</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 m-15px-tb">
                            <div className="feature-box-02 media align-items-center">
                                <div className="icon">
                                    <img src="static/img/a3.png" title="" alt="" />
                                </div>
                                <div className="media-body">
                                    <h6>Honorable mension</h6>
                                    <p>Site of the day</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="separated"></div>

                    <div className="title">
                        <h3>Testimonials.</h3>
                    </div>
                    <div className="owl-carousel owl-loaded owl-drag" data-items="2" data-nav-dots="true"
                         data-md-items="2" data-sm-items="1" data-xs-items="1" data-xx-items="1" data-space="30"
                         data-autoplay="true">


                        <div className="owl-stage-outer">
                            <div className="owl-stage"
                                 style="transform: translate3d(-1140px, 0px, 0px); transition: all 0s ease 0s; width: 4560px;">
                                <div className="owl-item cloned" style="width: 540px; margin-right: 30px;">
                                    <div className="testimonial-01 media">
                                        <div className="avatar">
                                            <img src="static/img/team-3.jpg" title="" alt="">
                                        </div>
                                        <div className="media-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s.</p>
                                            <h6>Jennifer Lutheran</h6>
                                            <span>CEO at pxdraft</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item cloned" style="width: 540px; margin-right: 30px;">
                                    <div className="testimonial-01 media">
                                        <div className="avatar">
                                            <img src="static/img/team-1.jpg" title="" alt="">
                                        </div>
                                        <div className="media-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s.</p>
                                            <h6>Jennifer Lutheran</h6>
                                            <span>CEO at pxdraft</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item active" style="width: 540px; margin-right: 30px;">
                                    <div className="testimonial-01 media">
                                        <div className="avatar">
                                            <img src="static/img/team-1.jpg" title="" alt="">
                                        </div>
                                        <div className="media-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s.</p>
                                            <h6>Jennifer Lutheran</h6>
                                            <span>CEO at pxdraft</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item active" style="width: 540px; margin-right: 30px;">
                                    <div className="testimonial-01 media">
                                        <div className="avatar">
                                            <img src="static/img/team-2.jpg" title="" alt="">
                                        </div>
                                        <div className="media-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s.</p>
                                            <h6>Jennifer Lutheran</h6>
                                            <span>CEO at pxdraft</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item" style="width: 540px; margin-right: 30px;">
                                    <div className="testimonial-01 media">
                                        <div className="avatar">
                                            <img src="static/img/team-3.jpg" title="" alt="">
                                        </div>
                                        <div className="media-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s.</p>
                                            <h6>Jennifer Lutheran</h6>
                                            <span>CEO at pxdraft</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item" style="width: 540px; margin-right: 30px;">
                                    <div className="testimonial-01 media">
                                        <div className="avatar">
                                            <img src="static/img/team-1.jpg" title="" alt="">
                                        </div>
                                        <div className="media-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s.</p>
                                            <h6>Jennifer Lutheran</h6>
                                            <span>CEO at pxdraft</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item cloned" style="width: 540px; margin-right: 30px;">
                                    <div className="testimonial-01 media">
                                        <div className="avatar">
                                            <img src="static/img/team-1.jpg" title="" alt="" />
                                        </div>
                                        <div className="media-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s.</p>
                                            <h6>Jennifer Lutheran</h6>
                                            <span>CEO at pxdraft</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item cloned" style="width: 540px; margin-right: 30px;">
                                    <div className="testimonial-01 media">
                                        <div className="avatar">
                                            <img src="static/img/team-2.jpg" title="" alt="" />
                                        </div>
                                        <div className="media-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s.</p>
                                            <h6>Jennifer Lutheran</h6>
                                            <span>CEO at pxdraft</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-nav disabled">
                            <div className="owl-prev"><i className="ti-arrow-left"></i></div>
                            <div className="owl-next"><i className="ti-arrow-right"></i></div>
                        </div>
                        <div className="owl-dots">
                            <div className="owl-dot active"><span></span></div>
                            <div className="owl-dot"><span></span></div>
                        </div>
                    </div>*/}

            </div>
        </section>
    );
};

export default About;