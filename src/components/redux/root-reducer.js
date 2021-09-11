import {combineReducers} from 'redux'; // combines multuple reducer togehter
import UserReducer from "./user/user.reducer";
// this where all the  reducer code is going to be
// all reducer going to stay here

export default combineReducers({
    user: UserReducer, // --> user is the object which holds the UserReducer
})
