import PizzaService from "../service/pizaApi";
import {addPizzaList} from "../actions";


export const getPizzas = () => (dispatch) => {
    const pizza = new PizzaService();
    pizza.getPizzas().then(res => dispatch(addPizzaList(res)));
};