import {CartActionTypes} from "./cart.types";


const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden // if its true convert to false if its false convert to true.
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload], //... state.cartItems mean spreading the array value for ...state. and action.payload will come after.
            }
        default:
            return state;
    }
}
export default CartReducer;