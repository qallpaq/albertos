import {ADD_REVIEW, ADD_REVIEWS} from "../actions";


const initialState = {
    reviews: [],

    arrayForSlider: [
        'https://p0.pikist.com/photos/3/517/pizza-chef-cook-uniform-food-pizzeria.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYwg7FIEGFQ4M-8iQn4APCgKv4t4c7GxHYkA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKciltVpD7HKijcrRLeprK76Z-YE4vrvoqOA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSSgE_t11YW-FUMoKcXebEIw1pPjwgSvmmwQ&usqp=CAU',
        'https://media02.stockfood.com/previews/MTMzOTQ4MTg4/11162349.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2Iqx5f9FjtW331g0VpDMNpm-z-6NLqIB5-g&usqp=CAU'
    ]
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
                reviews: [...state.reviews, action.payload]
            }
        default:
            return state
    }
};


export default aboutReducer;