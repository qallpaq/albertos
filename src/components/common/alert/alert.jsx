import React from "react";
import './alert.scss';


const Alert = ({alertOff, text}) => {

    const a = setTimeout(() => alertOff(), 4000);

    return (
        <div className='alert'>
            <h1 className='alert-title'>
                {text}
            </h1>

            <div className='alert-close' onClick={() => alertOff(a)}>
                <i className="fas fa-times-circle"/>
            </div>
        </div>
    );
};


export default Alert;