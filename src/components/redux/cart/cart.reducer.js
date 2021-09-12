import {CartActionTypes} from "./cart.types";


const INITIAL_STATE = {
    hidden: true
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden // if its true convert to false if its false convert to true.
            }
        default:
            return state;
    }
}
export default CartReducer;