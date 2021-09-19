import ShopActionTypes from "./shop.type";
import {convertCollectionSnapShotToMap, fireStore} from "../../firebase/firebase.utils";




//region fetCollectionsStart --> this will start the mark as saying the data transfer has begun.
export const fetCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START

})
//endregion

//region fetchCollectionsSuccess --> this will get the data from the database and also willl map data to false.
export const fetchCollectionsSuccess = (collectionsMap) => ({ // means this will start fetching data.
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})
//endregion

//region fetchCollectionsError --> errorMessage is passed to in case of errors.
export const fetchCollectionsError = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage

})

//endregion

//region fetchCollectionsStartAsync --> this is where fetchCollectionStart(),fetchCollectionSuccess(),fetchCollectionsError() all will be fired here

export const fetchCollectionsStartAsync = () => {
    return dispatch => { // dispatch means this will be launched later.
        const collectionRef = fireStore.collection('collections'); // get the colelctions from the dabase

        dispatch(fetCollectionsStart()) // dispatch is the function that pushes a dispatch a function and its pushing dispatch(fetchCollectionStart())
        //means fetching collection started

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionSnapShotToMap(snapshot);

            dispatch(fetchCollectionsSuccess(collectionsMap))

        }).catch(err => dispatch(fetchCollectionsError(err.message))) // pass the error message

    }
}
//endregion


