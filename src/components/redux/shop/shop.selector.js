import {createSelector} from 'reselect'

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(
        key => collections[key])
    //region ***Object.keys(collections.map())***
    /*

    * ***Object.keys(collections)
    * gets all the keys from the object thus it will return an array [hats,mens,extra]
    * collections.map(key=>collections[key] means loop through key but collections[key] will get the array for each key thus returning an big array
     */
    //endregion

)
export const selectCollection = collectionUrlParam => createSelector(
    // collectionURl Parm will recive an a string as a key. based on what ever passed key will be paseed hjere.
    [selectCollections], // this gets
    collections => collections[collectionUrlParam]
)
