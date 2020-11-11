import {CURRENT_PAGE} from "../actions";


const initialState = {
    currentPage: 1
}

const basicReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return state
    }
};


export default basicReducer;