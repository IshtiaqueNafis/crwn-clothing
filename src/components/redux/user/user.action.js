export const setCurrentUser = user => ({
//takes user object will be user user auth from firebase.utlis
    // returns an object where type is set current user.

    type: 'SET_CURRENT_USER', // thins a string always
    payload: user

})