import React from 'react';
import CollectionPreview from "../../components/preview-collection/collection-preview.component";
import {createStructuredSelector} from "reselect";
import {selectCollections} from "../../components/redux/shop/shop.selector";
import {connect} from "react-redux";

function ShopPage({collections}) {

    return (
        <div className='shop-page'>
            {collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))}
        </div>
    );
}

const mapStateToProps = createStructuredSelector(
    {
        collections: selectCollections
    }
)

export default connect(mapStateToProps)(ShopPage);
