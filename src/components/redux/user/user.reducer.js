import {userActionTypes} from "./user.type";

const INITIAL_STATE = {
    currentUser: null // this is the state for the user where currentUser is null.
}

const UserReducer = (state = INITIAL_STATE, action) => {
    //region ****(state,action)****
    /*
    **Reducer**
    * --> reducer is a function gets two properties
    * --> state and action are the properties
    **State**
    * --> state is the object initial state or last state
    **Action**
    * --> action object which has a type what action will be done action is a function that returns an object.
    * -->  payload can be anything use payload to update state
    **state=INITIAL_STATE**
    *  --> state always need to have initial state.
    *
     */

    //endregion
    switch (action.type) {

        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state, // this is coping the original state cause state is immutable.
                currentUser: action.payload // this is copying the current user.
            }

        default:
            return state; // this will come when none of the action where none fits.

    }


}

export default UserReducer;