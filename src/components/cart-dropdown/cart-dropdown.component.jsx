import React from 'react';
import "./cart-dropdown.styles.scss"
import CustomButton from "../custom-button/custom-Button.componenet";
import {connect} from "react-redux";
import CartItems from "../cart-item/cart-item.component";
import {selectCartItems} from "../redux/cart/cart.selector";
import {createStructuredSelector} from "reselect";

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

const mapStateToProps = createStructuredSelector ({

    cartItems: selectCartItems
});


export default connect(
    mapStateToProps)
(CartDropDown);
