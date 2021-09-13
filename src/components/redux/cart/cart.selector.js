import {createSelector} from 'reselect'
//two types of selectors
// inpout selector --> dooes not use create selector
// output selector  // uses create slelector.

// region ***const selectCart = state --> extrats cart reducer from rootReducer[input selector ]***
const selectCart = state => state.cart; //

// outputting uses it.

//endregion

//region selectCartHidden [outputSelector]
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden // get the cart.hidden
)
//endregion

//region ***export const selectCartItems = createSelector([selectCart],combiner)[output Selector]***
export const selectCartItems = createSelector(
    [selectCart], // this is an array with Selectcart that will return all the Cart from the reducer cart
    (cart) => cart.cartItems // from cart get the cartitems array
    // this is a map memories selector.
)
//endregion

//region   ***export const selectCartItems = createSelector([selectCartItems],combiner)[output Selector]***
export const selectCartItemsCount = createSelector(
    [selectCartItems], // this from selectCartItems which has the cartItems array
    cartItems => cartItems.reduce // now just loop through it add the quantaity.
        ((accumulatedQuantity, cartItem) =>
            accumulatedQuantity + cartItem.quantity, 0)
)
//endregion

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce // now just loop through it add the quantaity.
        ((accumulatedQuantity, cartItem) =>
            accumulatedQuantity + cartItem.quantity * cartItem.price, 0)
)