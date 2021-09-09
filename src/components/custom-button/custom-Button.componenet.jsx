import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
                {...otherProps} // rember the other props has to be passed here for any other property to work.
        >

            {children}
        </button>
    );
};

export default CustomButton;
