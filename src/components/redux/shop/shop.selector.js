import {createSelector} from 'reselect'

const selectShop = state => state.shop; // gets the shop from the reducer state means reducer

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections // gets the collections from the shop.collections.
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(
        key => collections[key]) : [] // means if there is a collection map else returns an empty array
    //region ***Object.keys(collections.map())***
    /*

    * ***Object.keys(collections)
    * gets all the keys from the object thus it will return an array [hats,mens,extra]
    * collections.map(key=>collections[key] means loop through key but collections[key] will get the array for each key thus returning an big array
     */
    //endregion

);
export const selectCollection = collectionUrlParam => createSelector(
    // collectionURl Parm will recive an a string as a key. based on what ever passed key will be paseed hjere.
    [selectCollections], // this gets
    collections => collections ? collections[collectionUrlParam] : null
)

export const selectIsCollectionsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections // means the collection is loaded
    //!! will convert anything to its true value.
)