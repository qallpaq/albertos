import React from 'react';
import './order-list.scss';
import Flag from "../common/flag";


const OrderList = ({orderList, onIncrease, onDecrease}) => {
    return (
        <div className='container'>
            <div className='order-list'>
                <Flag title='order'/>
                <div className='order-list__row'>
                    <div className='order-list__item'>#</div>
                    <div className='order-list__item'>Pizza</div>
                    <div className='order-list__item'>Quantity</div>
                    <div className='order-list__item'>Price</div>
                </div>
                {
                    orderList.map((el, idx) => {
                        return (
                            <div key={el.id} className='order-list__row'>
                                <div className='order-list__item'>{idx + 1}</div>
                                <div className='order-list__item'>{el.name}</div>
                                <div className='order-list__item'>
                                    <button className='order__list-btn' onClick={() => onDecrease(el.id)}>-</button>
                                    {el.count}
                                    <button className='order__list-btn' onClick={() => onIncrease(el.id)}>+</button>
                                </div>
                                <div className='order-list__item'>{el.total.toFixed(2)}$</div>
                            </div>
                        );
                    })
                }
                <div className='order-list__row'>
                    Total: {orderList.reduce((acc, value) => (acc + value.total), 0).toFixed(2)}$
                </div>
            </div>
        </div>
    );
};


export default OrderList;