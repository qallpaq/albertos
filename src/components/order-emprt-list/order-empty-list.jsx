import React from 'react';
import {Link} from "react-router-dom";
import './order-empty-list.scss';


const OrderEmptyList = () => {
    return (
        <div className='order__empty'>
            <h1 className='order__empty-title'>
                Take some pizza from
                <Link className='order__empty-link' to='/menu'>
                    <p aria-label="CodePen" className='order__empty-MENU'>
                        <span data-text="M">M</span>
                        <span data-text="E">E</span>
                        <span data-text="N">N</span>
                        <span data-text="U">U</span>
                    </p>
                </Link>
            </h1>
        </div>
    )
}

export default OrderEmptyList;