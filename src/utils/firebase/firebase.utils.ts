import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User,
    NextOrObserver,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    query,
    getDocs,
    writeBatch,
    QueryDocumentSnapshot,
} from 'firebase/firestore';
import { Category } from "../../store/categories/category.types";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5eoS95GCce865MZ5xECZ-10GZfg88H5s",
  authDomain: "clothing-db-11485.firebaseapp.com",
  projectId: "clothing-db-11485",
  storageBucket: "clothing-db-11485.appspot.com",
  messagingSenderId: "515477106438",
  appId: "1:515477106438:web:94c27367de87aedf1ff887",
  measurementId: "G-H9CWM29CZZ"
};

export type UserData = {
   displayName: string;
   email: string;
   createdAt: Date;
}

export type AdditionalInformation = {
   displayName?: string;
} 


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Google Authentication
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account',
});


// auth is singleton and keep track of authentication state of entire application
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// Database Usage
export const db = getFirestore();

// Add shop data to firebase
export type ObjectToAdd = {
   title: string;
}

export const addCollectionAndDocuments = async<T extends ObjectToAdd> (
    collectionKey: string, 
    objectsToAdd: T[]
   ) => {
   const collectionRef = collection(db, collectionKey);
   const batch = writeBatch(db);

   objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
   });

   await batch.commit();
}

// Get data from firebase
export const getCategoriesAndDocuments = async () : Promise<Category[]> => {
   const collectionRef = collection(db, 'categories');
   const q = query(collectionRef);

   const querySnapshot = await getDocs(q);
   return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as Category);
}


export const createUserDocumentForAuth = async (
     userAuth: User, 
     additionalInformation = {} as AdditionalInformation
   ): Promise<void | QueryDocumentSnapshot<UserData>> => {
   const userDocRef = doc(db, 'users', userAuth.uid);
   const userSnapshot = await getDoc(userDocRef);

   // if user does not exist
   if(!userSnapshot.exists()) {
     const {displayName, email} = userAuth;
     const createAt = new Date();

     try {
        await setDoc(userDocRef, {
           displayName,
           email,
           createAt,
           ...additionalInformation,
        })
     } catch (error) {
        console.log('error creating the user', error);
     }
   }

   return userSnapshot as QueryDocumentSnapshot<UserData>;
}

// sig-up form
export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
   if (!email || !password) return;

   return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
   if (!email || !password) return;
   return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async() => await signOut(auth);

// observer pattern
export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback);

// get the user
export const getCurrentUser = () => {
   return new Promise((resolve, reject) => {
      const unsubscibe = onAuthStateChanged(
         auth,
         (userAuth) => {
            unsubscibe();
            resolve(userAuth);
         },
         reject
      )
   });
}