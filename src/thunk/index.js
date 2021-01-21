import PizzaService from "../service/pizaApi";
import {addPizzaList, addReview, addReviews, isFetchingOff, isFetchingOn} from "../actions";
import AboutService from "../service/aboutApi";


export const getPizzas = () => async dispatch => {
    const pizza = new PizzaService();
    try {
        const res = await pizza.getPizzas()
        dispatch(addPizzaList(res))
    } catch (e) {
        alert(e.message)
    }
};

export const getReviews = () => async dispatch => {
    dispatch(isFetchingOn())
    const aboutService = new AboutService();

    try {
        const res = await aboutService.fetchReviews()
        dispatch(addReviews(res.reverse()))
    } catch (e) {
        console.log(e.message)
    }

    dispatch(isFetchingOff())
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
