import {CURRENT_PAGE, IS_FETCHING_OFF, IS_FETCHING_ON} from "../actions";


const initialState = {
    currentPage: 1,
    isFetching: false
}

const basicReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case IS_FETCHING_ON:
            return {
                ...state,
                isFetching: true
            }
        case IS_FETCHING_OFF:
            return {
                ...state,
                isFetching: false
            }
        default:
            return state
    }
};


export default basicReducer;