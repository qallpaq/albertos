import {basicReducer} from "../../reducers"
import {CURRENT_PAGE, IS_FETCHING_OFF, IS_FETCHING_ON} from "../../actions"


describe('basicReducer', () => {
    let state

    beforeEach(() => {
        state = {
            currentPage: 1,
            isFetching: false
        }
    })

    it('isFetching should be true', () => {
        const action = {type: IS_FETCHING_ON}
        const {isFetching} = basicReducer(state, action)

        expect(isFetching).toBe(true)
    })

    it('isFetching should be false', () => {
        const action = {type: IS_FETCHING_OFF}
        const {isFetching} = basicReducer(state, action)

        expect(isFetching).toBe(false)
    })

    it('currentPage should be 3', () => {
        const action = {type: CURRENT_PAGE, payload: 3}
        const {currentPage} = basicReducer(state, action)

        expect(currentPage).toBe(3)
    })

    it('currentPage should be 10000', () => {
        const action = {type: CURRENT_PAGE, payload: 10000}
        const {currentPage} = basicReducer(state, action)

        expect(currentPage).toBe(10000)
    })
})
