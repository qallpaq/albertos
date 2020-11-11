//basic-reducer
export const CURRENT_PAGE = 'CURRENT_PAGE';
export const changeCurrentPage = (currentPage) => ({type: CURRENT_PAGE, payload: currentPage});


//about-reducer
export const ADD_REVIEW = 'ADD_REVIEW';
export const addReview = (review) => ({type: ADD_REVIEW, payload: review});


//pizza-reducer
export const ADD_PIZZA_LIST = 'ADD_PIZZA_LIST';
export const ADD_TO_ORDER = 'ADD_TO_ORDER';
export const REMOVED_FROM_ORDER = 'REMOVED_FROM_ORDER';

export const addPizzaList = (newList) => ({type: ADD_PIZZA_LIST, payload: newList});
export const addToOrder = (id) => ({type: ADD_TO_ORDER, payload: id});
export const removedFromOrder = (id) => ({type: REMOVED_FROM_ORDER, payload: id});