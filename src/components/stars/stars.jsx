import React from 'react';
import './stars.scss';
import {useSelectorContext} from "../selector-context/selector-context";


const Stars = ({arrayForStars = [1, 2, 3, 4, 5], mod = '', onStarClick = () => ''}) => {

    const {stars} = useSelectorContext()

    return (
        <div className="stars">
            {arrayForStars.map(el => {
                return (
                    <li key={el} className={`stars__item${mod} ${stars >= el ? 'active' : ''}`}>
                        <i onClick={() => onStarClick(el)}
                           className="fas fa-star">
                            <span className='stars__item-text'>
                                {el}
                           </span>
                        </i>
                    </li>
                )
            })}
        </div>
    )
};


export default Stars;