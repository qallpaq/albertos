import React from "react";
import withCurrentPage from "../../hoc";
import About from "./about";
import {connect} from "react-redux";
import {addReview} from "../../actions";


const AboutContainer = ({arrayForSlider, addReview, reviews}) => {

    const onSubmit = (data) => {
        addReview(data)
        for (const prop of Object.keys(data)) {
            delete data[prop];
        }
    };

    return <About arrayForSlider={arrayForSlider}
                  onSubmit={onSubmit}
                  reviews={reviews}/>
};


const mapStateToProps = ({aboutPage: {reviews, arrayForSlider}}) => {
    return {reviews, arrayForSlider}
};

const mapDispatchToProps = {
    addReview
};

export default connect(mapStateToProps, mapDispatchToProps)(withCurrentPage(AboutContainer, 4));