import {ADD_PIZZA_LIST, ADD_TO_ORDER, REMOVED_FROM_ORDER} from "../actions";


const initialState = {
    pizzaList: [],
    orderList: []
};

const updateOrderList = (cartItems, item, idx) => {
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ];
    }

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1),
    ];
};

const updateOrderItem = (pizza, item = {}, quantity) => {
    const {id = pizza.id, count = 0, name = pizza.name, total = 0, image = pizza.img} = item;

    return {
        id, name, count: count + quantity, total: total + quantity * pizza.price, image
    }
};

const updateOrder = (state, pizzaId, quantity) => {
    const {pizzaList, orderList} = state;

    const pizza = pizzaList.find(({id}) => id === pizzaId);
    const itemIndex = orderList.findIndex(({id}) => id === pizzaId);
    const item = orderList[itemIndex];

    const newItem = updateOrderItem(pizza, item, quantity);
    return {
        ...state,
        orderList: updateOrderList(orderList, newItem, itemIndex)
    }
};

const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA_LIST:
            return {
                ...state,
                pizzaList: action.payload
            }
        case ADD_TO_ORDER:
            return updateOrder(state, action.payload, 1);
        case REMOVED_FROM_ORDER:
            return updateOrder(state, action.payload, -1);
        default:
            return state
    }
};


export default pizzaReducer;
