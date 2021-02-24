import React from 'react';
import './about.scss';
import Flag from "../common/flag";
import SlickSlider from "../common/slider";
import Review from "../review";


const About = ({onSubmit, reviews}) => {
    return (
        <div className='container'>
            <div className='about'>
                <Flag title='about us'/>
                <div className='about__content'>
                    <div className='about__item'>
                        <h1 className='about__item-title'>WE USE FRESH INGREDIENTS</h1>
                        <div className='about__item-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div className='about__item-image'>
                            <img
                                src="http://max-themes.net//demos/albertos/upload/vegies.jpg"
                                alt="freshImg"/>
                        </div>
                    </div>

                    <div className='about__item'>
                        <h1 className='about__item-title'>OUR TEAM</h1>
                        <div className='about__item-text'>Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </div>
                        <SlickSlider/>
                    </div>

                    <div className='about__item'>
                        <Review reviews={reviews} onSubmit={onSubmit}/>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default About;