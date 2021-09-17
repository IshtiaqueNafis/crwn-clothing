import React from 'react';
import {SpinnerContainer, SpinnerOverlay} from "./with-spinner.styles";

const WithSpinner = WrappedComponent => {
    return ({isLoading, ...otherProps}) => {
        return isLoading ? <SpinnerOverlay><SpinnerContainer/></SpinnerOverlay> : <WrappedComponent {...otherProps}/>
    };
    //region ***const WithSpinner = WrappedComponent => ({isLoading, ...otherProps})***
    /*
    **WrappedComponent** this where a component will be passed.
    * {isLoading, ...otherProps} --> is loading means the program is being loaded
    * {...otherProps} means for any other property for WrappedComponent. which will be passed/
     */
    //endregion

}


export default WithSpinner;
