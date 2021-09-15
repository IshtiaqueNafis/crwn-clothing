import React from 'react';
import './collectionPage.styles.scss'
import {selectCollection} from "../../components/redux/shop/shop.selector";
import {connect} from "react-redux";

const CollectionPage = ({collection}) => {
    //region   path={`${match.path}/:collectionId`}
    /*
    **   path={`${match.path}/:collectionId`}**
    *  collection id will be avilable here to find the correnct collection.

     */

    //endregion
    //match has acess to collection page.
    return (
        <div className='collection-page'>
            <h2>Category Page</h2>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    //owns props is the match which comes from the CollectionPage

    collection: selectCollection(ownProps.match.params.collectionId)(state) // this comes from ownProps.match.params.collectionId which is the match.
    //region ***collection:selectCollections(ownProps.match.params.collectionId)(state)***
    /*
    ***selectCollections(ownProps.match.params.collectionId)(state) ***
    * SelectCollections(ownProps.match.params.collectionId) --> this is callling the first section which is --> export const selectCollection = collectionUrlParam
    * (state) is calling the following function--> state
    *  createSelector(collectionURl Parm will recive an a string as a key. based on what ever passed key will be paseed hjere.
    *  [selectCollections], // this will call the function regarding select collection and selectshop
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]) // will return a state state.shop;
)
    *
     */
    //endregion

})

export default connect(mapStateToProps)(CollectionPage);
