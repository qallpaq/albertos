import React from 'react';
import './forms-controls.scss';


export const CreateForm = Element => ({meta, input, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`form__item-wrapper ${hasError ? 'error' : ''}`}>
            <Element {...input} {...props} className={`form__item form__item_${Element.toLowerCase()}`}/>
            {hasError && <span className='form__item-error'><i className="fas fa-exclamation-circle"/></span>}
            {hasError && <span className='form__item-error form__item-error_hover'>{meta.error}</span>}
        </div>
    );
};