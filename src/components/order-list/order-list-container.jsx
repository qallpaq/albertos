import React from 'react';
import OrderList from "./order-list";
import {connect} from "react-redux";
import {addToOrder, removedFromOrder} from "../../actions";
import withCurrentPage from "../../hoc";


const OrderListContainer = ({orderList, onIncrease, onDecrease}) => {
    return (
        <OrderList orderList={orderList}
                   onIncrease={onIncrease}
                   onDecrease={onDecrease}/>
    );
};


const mapStateToProps = ({pizzaPage: {orderList}}) => {
    return {orderList}
};

const mapDispatchToProps = {
    onIncrease: addToOrder,
    onDecrease: removedFromOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(withCurrentPage(OrderListContainer, 3));