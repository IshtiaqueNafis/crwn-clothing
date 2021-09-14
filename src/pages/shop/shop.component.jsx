import React from 'react';
import CollectionsOverView from "../../components/collection-overview/collections-overview.component";

function ShopPage({collections}) {

    return (
        <div className='shop-page'>
           <CollectionsOverView/>
        </div>
    );
}


export default ShopPage;
