import React from 'react';
import CollectionsOverView from "../../components/collection-overview/collections-overview.component";
import {Route} from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import {convertCollectionSnapShotToMap, fireStore} from "../../components/firebase/firebase.utils";
import {UpdateCollections} from "../../components/redux/shop/shop.actions";
import {connect} from "react-redux";
import WithSpinner from "../../components/spinner/with-spinner.component";

const CollectionsOverViewWithSpinner = WithSpinner(CollectionsOverView) // this is the HigherOrderfunction that takes CollectionOverFiew as a componenet.
const CollectionsPageWithSpinner = WithSpinner(CollectionPage) //

class ShopPage extends React.Component {

    state = {loading: true}

    unsubscribeFromSnapshot = null; // snapshot represent snapshot collections of the array comes from fireStore

    componentDidMount() {
        const {updateCollections} = this.props
        const collectionRef = fireStore.collection('collections') // means get the fireStore ColelctionsDatabase
        collectionRef.onSnapshot(async snapShot => {

            const collectionMap = convertCollectionSnapShotToMap(snapShot); // snapshot being passed convertCollectionSnapShotToMap
            // collectioNmap beocmes an object.
            updateCollections(collectionMap)
            this.setState({loading: false})
        })


        //region ***(collectionRef***
        /*
        ***fireStore.collection('collections')***
        * means this will get the collection from the firebase
        *** collectionRef.onSnapshot***
        * this will go over snapshot of the database to see if anything changed
        *
         */

        //endregion

    }


    render() {
        let {match} = this.props; // match object is avilable from route a
        const {loading} = this.state;
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
                        isLoading={loading} // isloading is being passed here
                        {...props}/>}/>
                <Route
                    path={`${match.path}/:collectionId`}
                    render={props => <CollectionsPageWithSpinner
                        isLoading={loading}  //
                        {...props}/>}
                />

            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(UpdateCollections(collectionMap))
})


export default connect(null, mapDispatchToProps)(ShopPage);
