import React from 'react';
import CollectionsOverView from "../../components/collection-overview/collections-overview.component";
import {Route} from "react-router-dom";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({match}) => { // match object is avilable from route a
                                //region ***match***
    /*
   *** <Route path='/shop' component={ShopPage}/>***
   * this was in the in app.js means where/typing shops would go to this page.
   * thus in here shop page become avilable.
   * match.path --> shop/
     */

    //endregion
    return (
        <div className='shop-page'>
            <Route
                exact path={`${match.path}`} // match.path -->
                component={<CollectionsOverView/>}/>
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPage}/>

        </div>
    );
};


export default ShopPage;
