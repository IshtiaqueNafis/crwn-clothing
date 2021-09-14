import React from 'react';
import "./collections-overview.styles.scss"
import CollectionPreview from "../preview-collection/collection-preview.component";
import {createStructuredSelector} from "reselect";
import {selectCollections} from "../redux/shop/shop.selector";
import {connect} from "react-redux";

const CollectionsOverView = ({collections}) => {
    return (
        <div className='collections-overview'>
            {collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))}
        </div>
    );
};
const mapStateToProps = createStructuredSelector(
    {
        collections: selectCollections
    }
)
export default connect(mapStateToProps)(CollectionsOverView);
