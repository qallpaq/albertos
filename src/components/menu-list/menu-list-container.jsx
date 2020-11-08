import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {addToOrder} from "../../actions";
import MenuList from "./menu-list";
import {getPizzas} from "../../thunk";
import withCurrentPage from "../../hoc";


const MenuListContainer = ({getPizzas, pizzaList, addToOrder}) => {

    useEffect(() => {
        getPizzas();
    }, []);

    return (
        <MenuList pizzaList={pizzaList} addToCart={addToOrder}/>
    );
};


const mapStateToProps = ({pizzaPage: {pizzaList}}) => {
    return {pizzaList}
};

const mapDispatchToProps = {
    addToOrder, getPizzas
};

export default connect(mapStateToProps, mapDispatchToProps)(withCurrentPage(MenuListContainer, 2));