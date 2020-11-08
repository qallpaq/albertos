import React from 'react';
import './home-page.scss';
import withCurrentPage from "../../hoc/with-current-page";


const HomePage = () => {
    return (
        <div className='home-page'>
            <div className='home-page__text'>
                <h2 className='home-page__title'>We have the Best</h2>
                <h2 className='home-page__subtitle'>Pizza</h2>
            </div>
        </div>
    );
};


export default withCurrentPage(HomePage, 1);