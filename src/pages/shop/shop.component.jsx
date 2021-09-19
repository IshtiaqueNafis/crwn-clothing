import React from 'react';
import CollectionsOverView from "../../components/collection-overview/collections-overview.component";
import {Route} from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import {fetchCollectionsStartAsync} from "../../components/redux/shop/shop.actions";
import {connect} from "react-redux";
import WithSpinner from "../../components/spinner/with-spinner.component";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionsFetching} from "../../components/redux/shop/shop.selector";

const CollectionsOverViewWithSpinner = WithSpinner(CollectionsOverView) // this is the HigherOrderfunction that takes CollectionOverFiew as a componenet.
const CollectionsPageWithSpinner = WithSpinner(CollectionPage) //

class ShopPage extends React.Component {


    unsubscribeFromSnapshot = null; // snapshot represent snapshot collections of the array comes from fireStore

    componentDidMount() {
        let { fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync()

    }


    render() {
        let {match, isCollectionFetching, fetchCollectionsStartAsync} = this.props; // match object is avilable from route a

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

                <Route exact path={`${match.path}`} render={props =>
                    <CollectionsOverViewWithSpinner
                        isLoading={isCollectionFetching} // isloading is being passed here
                        {...props}/>}/>
                <Route
                    path={`${match.path}/:collectionId`}
                    render={props => <CollectionsPageWithSpinner
                        isLoading={isCollectionFetching}  //
                        {...props}/>}
                />

            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionsFetching
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
