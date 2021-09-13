import React from 'react';
import './collection-item.styles.scss'
import CustomButton from "../custom-button/custom-Button.componenet";
import {addItem} from "../redux/cart/cart.actions";
import {connect} from "react-redux";

const CollectionItem = ({item, addItem}) => {

    const {name, price, imageUrl} = item;
    return (
        <div className='collection-item'>

            <div className='image'
                 style={{backgroundImage: `url(${imageUrl}`}}/>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton
                onClick={() => addItem(item)} // item is being passed to additem.
                inverted>Add To Cart</CustomButton>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
    //region
    /*
    ***addItem: item => dispatch(addItem(item))***
    * addItem --> is a function which will the get property of item
    *item => dispatch(addItem(item))
    * item is the value will be passed into dispatch(addItem(item)) will be launched too ad item to cart
     */

    //endregion
})

export default connect(null, mapDispatchToProps)(CollectionItem);
