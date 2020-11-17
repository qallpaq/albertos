import React from "react";
import {CreateForm} from "../common/forms-controls";
import {minLengthCreator, required} from "../../utils/validators";
import {Field, reduxForm} from "redux-form";
import './review-form.scss';
import MainButton from "../common/main-button";
import Stars from "../stars";
import {useDispatch} from "react-redux";
import {addStars} from "../../actions";


const Input = CreateForm('input');
const Textarea = CreateForm('textarea');

const minLength5 = minLengthCreator(5);

const ReviewForm = ({handleSubmit}) => {

    const dispatch = useDispatch()
    const onStarClick = (el) => {
        dispatch(addStars(el))
    }

    return (
        <form className='review-form' onSubmit={handleSubmit}>
            <div className='review__content'>
                <Field component={Input}
                       validate={[required]}
                       name={'reviewerName'}
                       type="text"
                       placeholder='Your name'/>
                <Field component={Textarea}
                       validate={[required, minLength5]}
                       name={'reviewerText'}
                       type="number"
                       placeholder='Your review'/>

                <Stars onStarClick={onStarClick}/>
            </div>
            <MainButton text='make review'/>
        </form>
    );
};


export default reduxForm({form: 'review'})(ReviewForm);