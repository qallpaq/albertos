import React from 'react';
import './flag.scss';


const Flag = ({title}) => {
    return (
        <div className="menu-list__flag">
            <i className="fas fa-pizza-slice"/>
            <h2>{title}</h2>
        </div>
    );
};


export default Flag;