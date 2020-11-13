import firebase from 'firebase/app'; // base library, gives access to firebase for librarys below, firestore and auth will be attached to the firebase import
import 'firebase/firestore';  // database library
import 'firebase/auth'; // Authentication library

const config = {
  apiKey: "AIzaSyA-DKdFgg8uj4ZNbt0kQ-p-vGVV4wwy3f0",
  authDomain: "crwn-clothing-295303.firebaseapp.com",
  databaseURL: "https://crwn-clothing-295303.firebaseio.com",
  projectId: "crwn-clothing-295303",
  storageBucket: "crwn-clothing-295303.appspot.com",
  messagingSenderId: "742163982909",
  appId: "1:742163982909:web:337e83334f6fca50f81854",
  measurementId: "G-5JJBVEXND6"
};

// wont itialize again if already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// named export for firebase auth module
export const auth = firebase.auth();
// named export fot firestore db module
export const firestore = firebase.firestore();

// Google Auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${ userAuth.uid }`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) { // if user doesnt exist
    const { displayName, email } = userAuth;  // pull displayName and email off userAuth
    const createdAt = new Date();  // created at equals current date/time

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user: ', error.message);
    }
  }

  return userRef;  // returns the userRef
}
