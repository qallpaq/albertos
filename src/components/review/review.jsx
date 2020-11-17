import React from 'react';
import './review.scss';
import ReviewForm from "../review-form/review-form";
import Spinner from "../common/spinner";
import {useSelectorContext} from "../selector-context/selector-context";
import Stars from "../stars";


const ReviewItems = ({reviews}) => {

    const {isFetching} = useSelectorContext()

    if (isFetching) {
        return <Spinner/>
    }

    return (
        Array.from(reviews).map(el => {
            const stars = [];
            for (let i = 1; i <= el.stars; i++) {
                stars.push(i)
            }
            return (
                <div className='review__item' key={el}>

                    <Stars arrayForStars={stars}
                           mod={' yellow'}/>

                    <div className='review__title'>
                        <h3 className='review__name'>{el.name}</h3>
                        <p className='review__date'>{el.date}</p>
                    </div>
                    <div className='review__text'>
                        {el.review}
                    </div>
                </div>
            )
        })
    );
};

const Review = ({reviews, onSubmit}) => {
    return (
        <div className='review'>
            <h1 className='about__item-title'>Reviews</h1>
            <ReviewForm onSubmit={onSubmit}/>
            <div className='review__items'>
                <ReviewItems reviews={reviews}/>
            </div>
        </div>
    );
};


export default Review;



