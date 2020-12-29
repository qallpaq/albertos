//basic-reducer
export const CURRENT_PAGE = 'CURRENT_PAGE';
export const IS_FETCHING_ON = 'IS_FETCHING_ON';
export const IS_FETCHING_OFF = 'IS_FETCHING_OFF';

export const changeCurrentPage = (currentPage) => ({type: CURRENT_PAGE, payload: currentPage});
export const isFetchingOn = () => ({type: IS_FETCHING_ON});
export const isFetchingOff = () => ({type: IS_FETCHING_OFF});


//about-reducer
export const ADD_REVIEWS = 'ADD_REVIEWS';
export const ADD_REVIEW = 'ADD_REVIEW';
export const ADD_STARS = 'ADD_STARS';

export const addReviews = (reviews) => ({type: ADD_REVIEWS, payload: reviews});
export const addReview = (review) => ({type: ADD_REVIEW, payload: review});
export const addStars = (stars) => ({type: ADD_STARS, payload: stars});


//pizza-reducer
export const ADD_PIZZA_LIST = 'ADD_PIZZA_LIST';
export const ADD_TO_ORDER = 'ADD_TO_ORDER';
export const REMOVED_FROM_ORDER = 'REMOVED_FROM_ORDER';

export const addPizzaList = (newList) => ({type: ADD_PIZZA_LIST, payload: newList});
export const addToOrder = (id) => ({type: ADD_TO_ORDER, payload: id});
export const removedFromOrder = (id) => ({type: REMOVED_FROM_ORDER, payload: id});
