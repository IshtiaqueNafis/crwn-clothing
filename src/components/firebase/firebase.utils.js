import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//region config from google server
const config = {
    // this is the config from the page
    apiKey: "AIzaSyA-2TdF8MrxOgaQ-jZD3LKxo9Xlb3c1geI",
    authDomain: "crown-db-815b5.firebaseapp.com",
    projectId: "crown-db-815b5",
    storageBucket: "crown-db-815b5.appspot.com",
    messagingSenderId: "221621876841",
    appId: "1:221621876841:web:025c71fef697a943238af8"
};
//endregion

firebase.initializeApp(config); // this initalizes the app so it can be used

//region auth and firestore config
export const auth = firebase.auth(); // using FireBase.auth() allows to use log in and log out system
export const fireStore = firebase.firestore(); // this will work with firestore.
//endregion

//region googleSIGN in Setup
const provider = new firebase.auth.GoogleAuthProvider(); // provider this gives acess to google.AuthProvider() from authentication library.
provider.setCustomParameters({prompt: 'select_account'}); // allow google pop up when authenticaiton and sign in
export const signInWithGoogle = () => auth.signInWithPopup(provider); // creates a prop up for users to sign in with google
                                                                      // provider is goolge here.
//endregion


//region createUserProfileDocument --> going to be api request to get the user.
export const createUserProfileDocument = async (userAuth, additionalData) => {
//userAuth is going to come front UserAuth Library
    // additional data will be an object
    if (!userAuth) return; // means no userAuth it is null and not logged in.
    const userRef = fireStore.doc(`users/${userAuth.uid}`);
    // userAuth --> has the lot of property but uid works as a id to identify the user.
    // fireStore.doc(`users/${userAuth.uid} --> will get document reference with current user.
    const snapShot = await userRef.get();
    // get the  userRef.get()  --> get the object reference
    //region  adding user to database if the user does not exist.
    if (!snapShot.exists) { // exists is part of the property from the database.
        const {displayName, email} = userAuth; // desecrating displayName and email from the userAuth.
        const createdAt = new Date(); // creates a newDate Object.
        try {
            await userRef.set({ //-> means users data will be set.
                displayName, // add Name,
                email, // adds email to current user.
                createdAt, // when was this created/
                ...additionalData // any other properties might want to pass.


            })
        } catch (err) {
            console.log('error creating user')
        }
    }
 //endregion
    return userRef; // return userRef

}

//endregion

export default firebase;