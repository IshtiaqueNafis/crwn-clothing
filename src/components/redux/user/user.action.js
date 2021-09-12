import {userActionTypes} from "./user.type";

export const setCurrentUser = user => ({
    // users as a parameter.
    //takes user object will be user user auth from firebase.utlis
    // returns an object where type is set current user.

    type: userActionTypes.SET_CURRENT_USER,
    payload: user

});