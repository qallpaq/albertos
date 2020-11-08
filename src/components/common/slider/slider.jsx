import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SlickSlider = ({arr}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
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

    const styledImg = {
        height: 30 + 'vh',
        width: 100 + '%',
        padding: 5 + 'px',
        cursor: 'pointer'
    };

    return (
        <Slider {...settings}>
            {arr.map((el, idx) => {
                return (
                    <div className='slide' key={idx}>
                        <img src={el} alt="slider-img" style={styledImg}/>
                    </div>
                );
            })}
        </Slider>
    );
};


export default SlickSlider;