import {CartActionTypes} from "./cart.types";


export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
    // note that there is no payload here cause its not using the payload.
})

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})
