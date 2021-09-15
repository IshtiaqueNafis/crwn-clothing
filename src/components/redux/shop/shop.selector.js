import {createSelector} from 'reselect'

const selectShop = state => state.shop;
const COLLECTION_ID_MAP = {
    // this has all the
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}
export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)
export const selectCollection = collectionUrlParam => createSelector(
    // collectionURl Parm will recive an a string as a key. based on what ever passed key will be paseed hjere.
    [selectCollections], // this gets
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]) // will return a state state.shop;
)