import React, {useState} from "react";
import withCurrentPage from "../../hoc";
import About from "./about";


const AboutContainer = () => {

    const onSubmit = (data) => {
        updateState(data);
        for (const prop of Object.keys(data)) {
            delete data[prop];
        }
    };

    const [state, setState] = useState([
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
    ]);

    const updateState = (data) => {
        setState([
            {
                name: data.reviewerName,
                review: data.reviewerText,
                date: new Date().toLocaleDateString(),
            }, ...state])
    };

    const arrayForSlider = [
        'https://p0.pikist.com/photos/3/517/pizza-chef-cook-uniform-food-pizzeria.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYwg7FIEGFQ4M-8iQn4APCgKv4t4c7GxHYkA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKciltVpD7HKijcrRLeprK76Z-YE4vrvoqOA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSSgE_t11YW-FUMoKcXebEIw1pPjwgSvmmwQ&usqp=CAU',
        'https://media02.stockfood.com/previews/MTMzOTQ4MTg4/11162349.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2Iqx5f9FjtW331g0VpDMNpm-z-6NLqIB5-g&usqp=CAU'
    ];

    return <About arrayForSlider={arrayForSlider}
                  onSubmit={onSubmit}
                  reviews={state}/>
};


export default withCurrentPage(AboutContainer, 4);