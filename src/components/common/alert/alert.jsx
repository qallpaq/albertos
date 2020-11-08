import React from "react";
import './alert.scss';


const Alert = ({setAlert}) => {
    return (
        <div className='alert'>
            <h1 className='alert-title'>
                Message sent
            </h1>

            <div className='alert-close' onClick={setAlert}>
                x
            </div>
        </div>
    );
};


export default Alert;