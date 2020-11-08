import React from 'react';
import './menu-list.scss';
import MenuListItem from "../menu-list-item";
import Flag from "../common/flag";
import Spinner from "../common/spinner";


const MenuList = ({pizzaList, addToCart}) => {
    return (
        <div className='container'>
            <div className='menu-list'>
                <Flag title='menu'/>
                {pizzaList.length === 0 && <Spinner/>}
                {pizzaList.map(pizza => <MenuListItem pizza={pizza}
                                                      key={pizza.id}
                                                      addToCart={() => addToCart(pizza.id)}/>)}
            </div>
        </div>
    );
};


export default MenuList;
