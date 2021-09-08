import React from 'react';
import './collection-preview.styles.scss'
import CollectionItem from "../collection-Items/collection-item.component";

const CollectionPreview = ({title, items,}) => {
    return (
        <div className='collection-preview'>
            <h1 className={title}>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items.filter((item, idx) => idx < 4).map(({id, ...otherPropsProperty}) => (
                    <CollectionItem key={id} {...otherPropsProperty}/>
                    // region {items.filter((item, idx) => idx < 4).map(item explained
                    /*
                      {items.filter((item,idx)=>idx<4).map(item => ( -->
                      (item,idx) --> item is the will be the single Item, idx is the index
                      (item,idx)=>idx<4 print less than 4 items.
                     */
                    //endregion
                ))}
            </div>
        </div>
    );
};

export default CollectionPreview;
