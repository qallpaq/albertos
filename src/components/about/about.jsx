import React from 'react';
import './about.scss';
import Flag from "../common/flag";
import SlickSlider from "../common/slider";
import withCurrentPage from "../../hoc";


const About = () => {
    const arrayForSlider = [
        'https://p0.pikist.com/photos/3/517/pizza-chef-cook-uniform-food-pizzeria.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYwg7FIEGFQ4M-8iQn4APCgKv4t4c7GxHYkA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKciltVpD7HKijcrRLeprK76Z-YE4vrvoqOA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSSgE_t11YW-FUMoKcXebEIw1pPjwgSvmmwQ&usqp=CAU',
        'https://media02.stockfood.com/previews/MTMzOTQ4MTg4/11162349.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2Iqx5f9FjtW331g0VpDMNpm-z-6NLqIB5-g&usqp=CAU'
    ];

    return (
        <div className='container'>
            <div className='about'>
                <Flag title='about us'/>
                <div className='about__content'>
                    <div className='about__item'>
                        <h1 className='about__item-title'>WE USE FRESH INGREDIENTS
                        </h1>
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
                        <SlickSlider arr={arrayForSlider}/>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default withCurrentPage(About, 4);