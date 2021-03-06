import React from 'react';
import './menu-list-item.scss';
import MainButton from "../common/main-button";


const MenuListItem = ({pizza: {img, name, ingredients, price}, addToCart}) => {
    return (
        <div className='menu-list__item'>
            <div className='menu-list__image-wrapper'>
                <div className='menu-list__image' style={{
                    background: `url(${img}) 50% 50%`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>

                </div>
            </div>
            <div className='menu-list__info'>
                <h2 className='menu-item__name'>{name}</h2>
                <div className='menu-item__ingredients'>{ingredients}</div>
                <h2 className='menu-item__price'>${price.toFixed(2)}</h2>
                <MainButton text='add to cart' fn={addToCart}/>
            </div>
        </div>
    );
};


export default MenuListItem;
