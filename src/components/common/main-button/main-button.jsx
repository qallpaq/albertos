import React from 'react';
import './main-button.scss';


const MainButton = ({text, fn = () => null}) => {
    return (
        <div className='main-button__wrapper'>
            <button className='main-button' onClick={fn}>
                {text}
            </button>
        </div>
    );
};


export default MainButton;