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

firebase.initializeApp(config);

//region auth and firestore config
export const auth = firebase.auth(); // this will be incharge of authentication
export const fireStore = firebase.firestore(); // this will work with firestore.
//endregion

//region googleSIGN in Setup
const provider = new firebase.auth.GoogleAuthProvider(); // provider this gives acess to google.AuthProvider() from authentication library.
provider.setCustomParameters({prompt: 'select_account'}); // allow google pop up when authenticaiton and sign in
export const signInWithGoogle = () => auth.signInWithPopup(provider); // creates a prop up for users to sign in with google
                                                                      // provider is goolge here.
//endregion

export default firebase;