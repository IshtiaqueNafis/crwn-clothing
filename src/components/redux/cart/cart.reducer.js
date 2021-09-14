import {CartActionTypes} from "./cart.types";
import {addItemtoCart, removeItemFromCart} from "./cart.utlis";


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

        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }

        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}
export default CartReducer;