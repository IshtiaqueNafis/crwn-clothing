import React from 'react';
import './collection-preview.styles.scss'
import CollectionItem from "../collection-Items/collection-item.component";

const CollectionPreview = ({title, items,}) => {
    return (
        <div className='collection-preview'>
            <h1 className={title}>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items.filter((item, idx) => idx < 4).map(item => (
                    <CollectionItem key={item.id} item={item}/>
                    // region ***{items.filter((item, idx) => idx < 4).map(({item}) => (<CollectionItem key={item.id} items={items}/>
                    /*
                    ***items***
                    * is coming in from the item array.
                    ***item, idx) => idx < 4
                    * means loop through items but make sure do but go less than 4 index  thus 4 items will come.
                    * map(({item}) ==> then from there destrcutre item and loop through it.
                    *
                     */

                    //endregion
                ))}
            </div>
        </div>
    );
};

export default CollectionPreview;
