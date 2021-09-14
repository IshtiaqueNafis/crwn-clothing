import {combineReducers} from 'redux'; // combines multuple reducer togehter
import UserReducer from "./user/user.reducer";
import CartReducer from "./cart/cart.reducer";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {directoryReducer} from "./directory/directory.reducer";
import {shopReducer} from "./shop/shop.reducer";


const persistConfig = {
    key: 'root', // means start the storage from the root
    storage,
    whitelist: ['cart'] // whitelist will hold the items in array will reference cart reducer.
}
const rootReducer = combineReducers({
    user: UserReducer, // --> user is the object which holds the UserReducer
    cart: CartReducer,
    directory: directoryReducer,
    shop: shopReducer
})


export default persistReducer(persistConfig, rootReducer); //modifed version of rootReducer


// all reducer going to stay here
// this is where all the states stay
//combies all the state together.
