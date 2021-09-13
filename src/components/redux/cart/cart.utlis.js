export const addItemtoCart = (cartItems, cartItemToAdd) => {
    // cartItems is for cartItems which is an array full of cart items
    // cartItemtoAdd is for cartItemId which is a cart.
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id) // returns a boolean to check if existingCartItem can be found here.

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}