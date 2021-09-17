import SHOP_DATA from "./Shop.Data";
import ShopActionTypes from "./shop.type";

const INITIAL_STATE = {
    collections: SHOP_DATA

}

export const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }

}