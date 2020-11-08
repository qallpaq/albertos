import {applyMiddleware, combineReducers, createStore} from "redux";
import {pizzaReducer, basicReducer} from "./reducers";
import {reducer as formReducer} from "redux-form";
import thunkMiddleware from 'redux-thunk';


const reducers = combineReducers({
    basic: basicReducer,
    pizzaPage: pizzaReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store;