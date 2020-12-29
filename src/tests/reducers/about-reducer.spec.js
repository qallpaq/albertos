import aboutReducer from '../../reducers/about-reducer'
import {ADD_REVIEW, ADD_REVIEWS, ADD_STARS} from "../../actions"


describe('About reducer', () => {
    let state
    beforeEach(() => {
        state = {reviews: [], stars: 5}
    })

    it('should return reviews === [1, 2, 3, 4]', () => {
        const action = {type: ADD_REVIEWS, payload: [1, 2, 3, 4]}
        const expectedRes = {reviews: [1, 2, 3, 4], stars: 5}

        expect(aboutReducer(state, action)).toEqual(expectedRes)
    })

    it('should return reviews.length === 0', () => {
        const action = {type: 'TEST', payload: 1}
        const {reviews} = aboutReducer(state, action)

        expect(reviews.length).toBe(0)
    })

    it('should return reviews.length === 1', () => {
        const action = {type: ADD_REVIEW, payload: 1}
        const {reviews} = aboutReducer(state, action)

        expect(reviews.length).toBe(1)
    })

    it('should return stars === 1', () => {
        const action = {type: ADD_STARS, payload: 1}
        const {stars} = aboutReducer(state, action)

        expect(stars).toBe(1)
    })

    it('should return stars === 69', () => {
        const action = {type: ADD_STARS, payload: 69}
        const {stars} = aboutReducer(state, action)

        expect(stars).toBe(69)
    })
})
