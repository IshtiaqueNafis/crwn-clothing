import {CartActionTypes} from "./cart.types";


export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
    // note that there is no payload here cause its not using the payload.
})
