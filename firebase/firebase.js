import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBJ7DclS1pr482b0rMVDy9dSuGPvy91ymE",
  authDomain: "flatsy-77d92.firebaseapp.com",
  databaseURL: "https://flatsy-77d92.firebaseio.com",
  projectId: "flatsy-77d92",
  storageBucket: "flatsy-77d92.appspot.com",
  messagingSenderId: "164302035623",
  appId: "1:164302035623:web:407f033052f8b8a37b1982",
  measurementId: "G-RFK206PG98"
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
