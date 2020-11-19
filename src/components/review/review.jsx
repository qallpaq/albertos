import React from 'react';
import {useSelectorContext} from "../selector-context/selector-context";
import ReviewForm from "../review-form/review-form";
import Stars from "../stars";
import Spinner from "../common/spinner";
import './review.scss';


const ReviewItems = ({reviews}) => {

    const {isFetching} = useSelectorContext()

    if (isFetching) {
        return <Spinner/>
    }

    return (
        <div className='review__items'>
            {
                Array.from(reviews).map(el => {
                    const stars = [];
                    for (let i = 1; i <= el.stars; i++) {
                        stars.push(i)
                    }
                    return (
                        <div className='review__item' key={el.id}>
                            <Stars arrayForStars={stars} mod={' yellow'}/>
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
            }
        </div>
    )
};

const Review = ({reviews, onSubmit}) => {
    return (
        <div className='review'>
            <h1 className='about__item-title'>Reviews</h1>
            <ReviewForm onSubmit={onSubmit}/>
            <ReviewItems reviews={reviews}/>
        </div>
    );
};


export default Review;



