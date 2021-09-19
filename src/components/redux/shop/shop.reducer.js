import ShopActionTypes from "./shop.type";

const INITIAL_STATE = {
    collections: null,
    isFetching: false, // whehter or not why are fetching the data for the loading property.
    error: "" // this will hold the error message.

}

export const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START: {
            return {
                ...state,
                isFetching: true // means  fetching is being done right now
            }

        }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS: {
            return {
                ...state,
                isFetching: false, //means data has been added
                collections: action.payload // means collections is done.

            }
        }
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE: {
            return {
                ...state,
                isFetching: false,
                error: action.payload

            }
        }


        default:
            return state;
    }

}