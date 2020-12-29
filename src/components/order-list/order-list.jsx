import React, {useState} from 'react';
import './order-list.scss';
import Flag from "../common/flag";
import MainButton from "../common/main-button";
import ModalWindow from "../modal-window";
import Alert from "../common/alert";
import OrderEmptyList from "../order-emprt-list";


const OrderList = ({orderList, onIncrease, onDecrease}) => {

    const [form, setForm] = useState(false);

    const [alert, setAlert] = useState(false);
    const alertOff = (a) => {
        setAlert(false)
        clearTimeout(a)
    }

    const closeWindow = () => {
        setForm(false)
    };

    const onSubmit = (formData) => {
        for (const prop of Object.keys(formData)) {
            delete formData[prop];
        }
        setAlert(true);
    };

    const reduceOrder = arr => {
        return arr.reduce((acc, value) => (acc + value.total), 0).toFixed(2)
    }

    return (
        <div className='container'>
            {alert && <Alert text='Orders is accepted!)' alertOff={alertOff}/>}
            {form && <ModalWindow closeWindow={closeWindow} onSubmit={onSubmit}/>}
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

                {orderList.length === 0 && <OrderEmptyList/>}

                {
                    orderList.map((el, idx) => {
                        return (
                            <div key={el.id} className='order-list__row'>
                                <div className='order-list__item'>{idx + 1}</div>
                                <div className='order-list__item'>{el.name}</div>
                                <div className='order-list__item'>
                                    <button className='order__list-btn order__list-btn_red'
                                            onClick={() => onDecrease(el.id)}>
                                        <i className="fas fa-minus-square"/>
                                    </button>
                                    {el.count}
                                    <button className='order__list-btn order__list-btn_green'
                                            onClick={() => onIncrease(el.id)}>
                                        <i className="fas fa-plus-square"/>
                                    </button>
                                </div>
                                <div className='order-list__item'>{el.total.toFixed(2)}$</div>
                            </div>
                        );
                    })
                }
                <div className='order-list__row'>
                    {orderList.length !== 0 && <MainButton text='buy it' fn={() => setForm(true)}/>}
                    Total: {reduceOrder(orderList)}$
                </div>
            </div>
        </div>
    );
};


export default OrderList;