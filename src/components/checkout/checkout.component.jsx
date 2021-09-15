import React from 'react';
import './checkout.styles.scss'
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../redux/cart/cart.selector";
import {connect} from "react-redux";
import CheckoutItemComponent from "../checkout-item/checkout-item.component";
import StripeCheckOutButton from "../stripe-button/stripe-button.component";


const Checkout = ({cartItems, total}) => {
    return (
        <div className='checkout-page'>
            <div className="checkout-header">
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => (
                    <CheckoutItemComponent key={cartItem.id} cartItem={cartItem}/>
                ))
            }
            <div className='total'>
                <span>TOTAL:${total}</span>
            </div>
            <div className="test-warning">
                *Please Use the following credit card for Payments *
                <br/>
                4242 4242 4242 4242 -EXP:any future date, -CVV-123
            </div>

            <StripeCheckOutButton price={total}/>
        </div>
    );
};
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal

})

export default connect(mapStateToProps)(Checkout);
