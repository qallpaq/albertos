import React, {useState} from 'react';
import './order-list.scss';
import Flag from "../common/flag";
import MainButton from "../common/main-button";


const OrderList = ({orderList, onIncrease, onDecrease}) => {

    const [form, setForm] = useState(false);

    return (
        <div className='container'>
            {form && <div onClick={() => setForm(false)}>buy this shit</div>}
            <div className='order-list'>
                <Flag title='order'/>
                <div className='order__images'>
                    {
                        orderList.map(el => {
                            return (
                                <div className='order__image-wrapper' key={el.id + 'qwerty'}>
                                    <img className='order__image' src={el.image} alt="pizza"/>
                                    <h4 className='order__images-label'>{el.name}</h4>
                                </div>
                            )
                        })
                    }
                </div>

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
                                    <button className='order__list-btn order__list-btn_red'
                                            onClick={() => onDecrease(el.id)}>-
                                    </button>
                                    {el.count}
                                    <button className='order__list-btn order__list-btn_green'
                                            onClick={() => onIncrease(el.id)}>+
                                    </button>
                                </div>
                                <div className='order-list__item'>{el.total.toFixed(2)}$</div>
                            </div>
                        );
                    })
                }
                <div className='order-list__row'>
                    {orderList.length !== 0 && <MainButton text='buy it' fn={() => setForm(true)}/>}
                    Total: {orderList.reduce((acc, value) => (acc + value.total), 0).toFixed(2)}$
                </div>
            </div>
        </div>
    );
};


export default OrderList;