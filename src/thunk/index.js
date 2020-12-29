import PizzaService from "../service/pizaApi";
import {addPizzaList, addReview, addReviews, isFetchingOff, isFetchingOn} from "../actions";
import AboutService from "../service/aboutApi";


export const getPizzas = () => (dispatch) => {
    const pizza = new PizzaService();
    try {
        pizza.getPizzas().then(res => dispatch(addPizzaList(res)));
    } catch (e) {
        console.log(e.message)
    }
};

export const getReviews = () => (dispatch) => {
    dispatch(isFetchingOn())
    const aboutService = new AboutService();
    try {
        aboutService.fetchReviews()
            .then(res => {
                dispatch(addReviews(res.reverse()))
                dispatch(isFetchingOff())
            }).catch(() => {
            dispatch(isFetchingOff())
        })
    } catch (e) {
        console.log(e.message)
    }
};

export const getReview = (data, stars) => (dispatch) => {
    const {reviewerName, reviewerText} = data;
    if (data !== undefined && reviewerName !== undefined) {
        const aboutService = new AboutService();
        const review = {
            name: reviewerName,
            review: reviewerText,
            date: new Date().toLocaleDateString(),
            stars: stars,
            id: reviewerName + reviewerText + Math.random()
        }
        aboutService.fetchReview(review)
        dispatch(addReview(review))
    }
};
