import React, {useEffect} from "react";
import withCurrentPage from "../../hoc";
import About from "./about";
import {connect} from "react-redux";
import {getReview, getReviews} from "../../thunk";


const AboutContainer = ({arrayForSlider, reviews, getReviews, getReview, stars}) => {

    useEffect(() => {
        getReviews()
    }, [])

    const onSubmit = (data) => {
        getReview(data, stars)

        for (const prop of Object.keys(data)) {
            delete data[prop];
        }
    };

    return <About arrayForSlider={arrayForSlider}
                  onSubmit={onSubmit}
                  reviews={reviews}/>
};


const mapStateToProps = ({aboutPage: {reviews, arrayForSlider, stars}}) => {
    return {reviews, arrayForSlider, stars}
};

const mapDispatchToProps = {
    getReviews,
    getReview
};

export default connect(mapStateToProps, mapDispatchToProps)(withCurrentPage(AboutContainer, 4));