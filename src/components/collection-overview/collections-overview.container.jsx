//wraps higher order componenets.

//container gets wrapped around higher order component.

// wraaping map state to props.

// wrap map state to props connect colelction overview with spinner.


import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectIsCollectionsFetching} from "../redux/shop/shop.selector";
import WithSpinner from "../spinner/with-spinner.component";
import CollectionsOverView from "./collections-overview.component";
import {compose} from 'redux'

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsFetching, // this is getting the data from the database.
});

const CollectionsOverViewContainer = compose(
    connect(mapStateToProps), // connect the database to componenent
    WithSpinner,
)(CollectionsOverView)

export default CollectionsOverViewContainer

//region
/* CollectionsOverViewContainer if it was without compose would be something like this connect(mapstateTorops)(withSpinner(collectionsOverView)


 */


//endregion

