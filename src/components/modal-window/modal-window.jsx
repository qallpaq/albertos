import React from 'react';
import './modal-window.scss';
import {Field, reduxForm} from "redux-form";
import {CreateForm} from "../common/forms-controls";
import {minLengthCreator, required} from "../../utils/validators";
import MainButton from "../common/main-button";


const Input = CreateForm('input');

const minLength16 = minLengthCreator(16);
const minLength4 = minLengthCreator(4);

const ModalWindow = ({handleSubmit, closeWindow}) => {
    return (
        <form className='modal-window' onSubmit={handleSubmit}>
            <div className='modal-window__content'>
                <Field component={Input}
                       validate={[required, minLength16]}
                       name={'numbers'}
                       type="number"
                       placeholder='0000 0000 0000 0000'/>

                <Field component={Input}
                       validate={[required, minLength4]}
                       name={'data'}
                       type="number"
                       placeholder='Month/Year'/>

                <Field component={Input}
                       validate={[required]}
                       name={'surname'}
                       type="text"
                       placeholder='Name'/>

                <Field component={Input}
                       validate={[required]}
                       name={'name'}
                       type="text"
                       placeholder='Surname'/>
            </div>
            <MainButton text='buy'/>
            <div className='close-icon'>
                <i className="fas fa-times-circle" onClick={closeWindow}/>
            </div>
        </form>
    );
};


export default reduxForm({form: 'modalWindow'})(ModalWindow);