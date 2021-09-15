import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckOutButton = ({price}) => {
    const priceForStripe = price * 100; // converts to cents.
    const publishableKey = 'pk_test_51Ja1BuJt1snT2vEaqMyyvVgYBitmvGk7s7E3Yp68kdVWJvLhd5pKNBgKdDcaVbAm8xVTMk0JT7zAxlBWf4aLqXOv00Vw2r8qjO'


    const onToken = token => {
        console.log(token)
        alert('payment successful')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='crown clothing'
            billingAddress
            shippingAddress

            image={'https://svgshare.com/i/Y0o.svg'}
            amount={priceForStripe}
            description={`your total is $${price}`}
            panelLabel={'pay now'}

            stripeKey={publishableKey} token={onToken}/>

    );
};

export default StripeCheckOutButton;
