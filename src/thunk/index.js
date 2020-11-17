import PizzaService from "../service/pizaApi";
import {addPizzaList, addReview, addReviews} from "../actions";
import AboutService from "../service/aboutApi";


export const getPizzas = () => (dispatch) => {
    const pizza = new PizzaService();
    pizza.getPizzas().then(res => dispatch(addPizzaList(res)));
};

export const getReviews = () => (dispatch) => {
    const aboutService = new AboutService();
    aboutService.fetchReviews()
        .then(res => {
            dispatch(addReviews(res))
        })
};

export const getReview = ({reviewerName, reviewerText}) => (dispatch) => {
    if (reviewerText !== undefined && reviewerName !== undefined) {
        const aboutService = new AboutService();
        const review = {
            name: reviewerName,
            review: reviewerText,
            date: new Date().toLocaleDateString()
        }
        aboutService.fetchReview(review)
        dispatch(addReview(review))
    }
};