import {ADD_REVIEW, ADD_REVIEWS, ADD_STARS} from "../actions";


const initialState = {
    reviews: [],
    stars: 5
};


const aboutReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_REVIEWS:
            return {
                ...state,
                reviews: action.payload
            }
        case ADD_REVIEW:
            return {
                ...state,
                reviews: [action.payload, ...state.reviews]
            }
        case ADD_STARS:
            return {
                ...state,
                stars: action.payload
            }
        default:
            return state
    }
};


export default aboutReducer;