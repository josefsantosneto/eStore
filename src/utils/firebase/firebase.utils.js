import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_9kmik8YthznfRpHdNp74pduH7UsMnFg",
    authDomain: "crwn-clothing-db-48446.firebaseapp.com",
    projectId: "crwn-clothing-db-48446",
    storageBucket: "crwn-clothing-db-48446.appspot.com",
    messagingSenderId: "212187789281",
    appId: "1:212187789281:web:d8a810e3c7da2585a684a0"
  };



  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = ()=>
 signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = ()=> 
signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

//this function below is going to check if there is a document with the same id
//and is going to create this user document in case of not exist

export const createUserDocumentFromAuth = async (userAuth)=> {
  const userDocRef = doc(db, 'users', userAuth.uid);
  
  const userSnapshot = await getDoc(userDocRef);
  
  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    }catch(error){
      console.log('error creating the user', error.message);

    }
  }

  return userDocRef;
};
