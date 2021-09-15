import {createSelector} from 'reselect'

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)
export const selectCollection = collectionUrlParam => createSelector(
    // collectionURl Parm will recive an a string as a key. based on what ever passed key will be paseed hjere.
    [selectCollections], // this gets
    collections => collections[collectionUrlParam]
)