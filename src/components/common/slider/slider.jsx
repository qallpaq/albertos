import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.scss';
import slide1 from '../../../images/chefs/chef1-min.jpg'
import slide2 from '../../../images/chefs/chef2-min.jpg'
import slide3 from '../../../images/chefs/chef3-min.jpg'
import slide4 from '../../../images/chefs/chef4-min.jpg'
import slide5 from '../../../images/chefs/chef5-min.jpg'
import slide6 from '../../../images/chefs/chef6-min.jpg'


const SlickSlider = () => {
    const slides = [slide1, slide2, slide3, slide4, slide5, slide6]

    const settings = {
        dots: true,
        infinite: true,
        touchThreshold: 12,
        speed: 500,
        slidesToShow: 4,
        swipeToSlide: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {slides.map((slide, idx) => {
                return (
                    <div className='slide' key={idx}>
                        <div style={{
                            background: `url(${slide}) 50% 50%`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            width: '100%',
                            height: '100%',
                        }}/>
                    </div>
                );
            })}
        </Slider>
    );
};


export default SlickSlider;