import pizza1 from '../images/pizzaList/1-min.jpg'
import pizza2 from '../images/pizzaList/2-min.jpg'
import pizza3 from '../images/pizzaList/3-min.jpg'
import pizza4 from '../images/pizzaList/4-min.jpg'
import pizza5 from '../images/pizzaList/5-min.jpg'
import pizza6 from '../images/pizzaList/6-min.jpg'
import pizza7 from '../images/pizzaList/7-min.jpg'
import pizza8 from '../images/pizzaList/8-min.jpg'
import pizza9 from '../images/pizzaList/9-min.jpg'


export default class PizzaService {
    data = [
        {
            name: 'Hawaii',
            price: 5.50,
            ingredients: 'Pineapple, mushrooms, black olives, tomato sauce',
            id: '1',
            img: pizza1
        },
        {
            name: 'Freshness',
            price: 8.40,
            ingredients: 'Fresh tomatoes, garlic, red onion, cheese, minced meat, dandelion, olives',
            id: '2',
            img: pizza2
        },
        {
            name: 'From sea',
            price: 6.40,
            ingredients: 'Olive, meta, squid, shrimps, fresh mushrooms, fresh red tomatoes, cheese',
            id: '3',
            img: pizza3
        },
        {
            name: 'Calzone',
            price: 7.10,
            ingredients: 'Cup fresh ricotta, parmesan, chopped basil, pepper, tomato sauce, fresh mozzarella',
            id: '4',
            img: pizza4
        },
        {
            name: 'Classic',
            price: 6.10,
            ingredients: 'Pepperoni, cheese, black olives, tomatoe sauce, mushrooms, meat, onion, salad',
            id: '5',
            img: pizza5
        },
        {
            name: 'Neapolitan',
            price: 6.20,
            ingredients: 'Tomato, oregano, garlic, extra virgin olive oil, pepperoni, cheese, red onion, sauce, mushrooms',
            id: '6',
            img: pizza6
        },
        {
            name: 'Farmer',
            price: 7.40,
            ingredients: 'Fresh mushrooms, fresh green bell peppers, tomatoes, black olives, meat, sausages',
            id: '7',
            img: pizza7
        },
        {
            name: 'Mexican',
            price: 6.50,
            ingredients: 'Refried beans, red enchilada sauce, blend cheese, nacho, corn, onion, salsa, choriz',
            id: '8',
            img: pizza8
        },
        {
            name: 'Margherita',
            price: 6.90,
            ingredients: 'Pepperoni, cheese, black olives, tomatoe sause, mushrooms, onion',
            id: '9',
            img: pizza9
        },
    ];

    getPizzas() {
        return new Promise((resolve) => setTimeout(() => resolve(this.data), 300));
    };
};
