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


//region createUserProfileDocument --> returns a document reference.
export const createUserProfileDocument = async (userAuth, additionalData) => {

    //region ****(userAuth, additionalData)****
    /*
        *userAuth is going to come front UserAuth Library --> export const auth = firebase.auth(); this library is a userObject
        * additional data will be an object

     */
    //endregion

    if (!userAuth) return; // means no userAuth it is null and not logged in.

    const userRef = fireStore.doc(`users/${userAuth.uid}`); // this is a document reference

    //region Const userRef = fireStore.doc(`users/${userAuth.uid}`); explained
    /*
     ****Query******
    * this is asking for a query --> asking firestore for document or collection.  so pretty much asking for something from database
    *  query gives quereyreference and querysnapsshot --> they can either come in as document or collection after
    ****QueryReference******
    * current place on the database
    * document or collection will be returned from here
    * users/${userAuth.uid} is  a document call --> cause const userRef = fireStore.doc(`users/${userAuth.uid}`); --> users is the collectionreferece cause it where the id is located.
    *****DocumentReference vs Collection Reference ******
    * document reference helps with crud operation. --> retturns documentSnapshot
    * collections reference only does adding. --> returns querySnapshot
    * similarities == both returns returns snapshotObject  via get()

     */

    //endregion

    const snapShot = await userRef.get(); // SNAPSHOT IS BEING RECIVED FROM DOUCMENTREFERENCE THIS IS A DOCUMENTsNAPSHOT

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
    return userRef; // return userRef which is a userreference

}

//endregion


//region
export const addCollectionAndDocuments = async (collectionKey, ObjectsToAdd) => {
    const collectionRef = fireStore.collection(collectionKey) //CollectionReference
    console.log(collectionRef) // this will get a collection reference object.
    const batch = fireStore.batch()
    ObjectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc(); // get it on an empty string. and randomly generate an id // this will be a doucment reference.
        batch.set(newDocRef, obj) // newDOcref is the array that is being passed and set it to object.

    })
    return await batch.commit();
}


//endregion

export default firebase;