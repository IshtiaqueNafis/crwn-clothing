import {combineReducers} from 'redux'; // combines multuple reducer togehter
import UserReducer from "./user/user.reducer";
import CartReducer from "./cart/cart.reducer";

export default combineReducers({
    user: UserReducer, // --> user is the object which holds the UserReducer
    cart:CartReducer,
})


// all reducer going to stay here
// this is where all the states stay
//combies all the state together.
