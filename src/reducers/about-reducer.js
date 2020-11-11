import {ADD_REVIEW} from "../actions";


const initialState = {
    reviews: [
        {
            name: 'Jacombo',
            review: 'Very tasty pizza, recommended to everyone',
            date: '28.11.2020',
        },
        {
            name: 'D. Onton',
            review: 'Very tasty, but grill chicken tastes better',
            date: '30.05.2020',
        },
        {
            name: 'Grisha',
            review: 'Not bad...',
            date: '23.03.2020',
        },
    ],

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
        case ADD_REVIEW:
            return {
                ...state,
                reviews: [{
                    name: action.payload.reviewerName,
                    review: action.payload.reviewerText,
                    date: new Date().toLocaleDateString(),
                }, ...state.reviews]
            }
        default:
            return state
    }
};


export default aboutReducer;