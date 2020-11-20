import React from 'react';
import './contact-form.scss';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators";
import {CreateForm} from "../common/forms-controls";
import MainButton from "../common/main-button";


const maxlength150 = maxLengthCreator(150);

const Textarea = CreateForm('textarea');
const Input = CreateForm('input');

const ContactForm = ({handleSubmit}) => {
    return (
        <form className='form' onSubmit={handleSubmit}>
            <h2 className='form__title'>CONTACT FORM</h2>
            <div className='form__inputs'>
                <Field component={Input}
                       validate={[required]}
                       name={'name'}
                       type="text"
                       placeholder='name'/>

                <Field component={Input}
                       validate={[required]}
                       name={'email'}
                       type="text"
                       placeholder='email'/>

                <Field component={Textarea}
                       validate={[required, maxlength150]}
                       name={'message'}
                       placeholder='message'/>
            </div>
            <MainButton text={'send'}/>
        </form>
    );
};


export default reduxForm({form: 'contact'})(ContactForm);