import React from 'react';
import "./cart-dropdown.styles.scss"
import CustomButton from "../custom-button/custom-Button.componenet";
import {connect} from "react-redux";
import CartItems from "../cart-item/cart-item.component";
import {selectCartItems} from "../redux/cart/cart.selector";

const CartDropDown = ({cartItems}) =>
    (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map(cartItem => <CartItems key={cartItem.id} item={cartItem}/>)


                }

            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );

const mapStateToProps = (state) => ({
    //region ***({cart:{cartItems}})***
    /*
    ***cart***
    * cart comes from the cart reducer
    ***cartItems***
    *cartItems is the array from the   from cart reducer
    const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

     */
    //endregion
    cartItems: selectCartItems(state)
});


export default connect(
    mapStateToProps)
(CartDropDown);
