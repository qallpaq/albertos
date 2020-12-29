import pizzaReducer from "../../reducers/pizza-reducer"
import {ADD_PIZZA_LIST} from "../../actions"


describe('pizzaReducer', () => {
    let state

    beforeEach(() => {
        state = {
            pizzaList: [],
            orderList: []
        }
    })

    it('should return pizzaList === [1, 2, 3, 4]', () => {
        const action = {type: ADD_PIZZA_LIST, payload: [1, 2, 3, 4]}
        const {pizzaList} = pizzaReducer(state, action)

        expect(pizzaList).toEqual([1, 2, 3, 4])
    })
})
