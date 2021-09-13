import {CartActionTypes} from "./cart.types";
import {addItemtoCart} from "./cart.utlis";


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
                cartItems: addItemtoCart(state.cartItems, action.payload) // state is the array, payload which returns an object.
            }
        default:
            return state;
    }
}
export default CartReducer;