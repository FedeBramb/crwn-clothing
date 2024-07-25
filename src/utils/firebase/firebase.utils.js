import { initializeApp } from "firebase/app";

import { 
  getAuth, // Richiesta autorizzione
  signInWithRedirect, // Log In Google nuova finestra
  signInWithPopup, // Log In con pop-up
  GoogleAuthProvider, // Provider per autorizzazione Google
  createUserWithEmailAndPassword, // Crea nuovo utente
  signInWithEmailAndPassword, // Log in
  signOut, // Log out
  onAuthStateChanged, // Observer monitora i cambiamenti dello state dell'utente
} from 'firebase/auth';


import { 
  getFirestore, // Istanzia FireStore
  doc, // Riceve il documento
  getDoc, // Ottiene i dati
  setDoc, // Modifica i dati
  collection, // Riferimento a collezione nel DB
  writeBatch, // Raggruppa di operazioni di scrittura
  query, // Crea una query, recupera documenti da collezione
  getDocs // Esegue una query e restituisce i documenti corrispondenti
} from "firebase/firestore";

// Web App firebase configurazione presa dal mio profilo
const firebaseConfig = {
  apiKey: "AIzaSyDO_1CIy2dyFmDL8UQ9t5zYmYBkjyQgWiE",
  authDomain: "crwn-clothing-db-e7fd3.firebaseapp.com",
  projectId: "crwn-clothing-db-e7fd3",
  storageBucket: "crwn-clothing-db-e7fd3.appspot.com",
  messagingSenderId: "1042191819268",
  appId: "1:1042191819268:web:133c1544639726300a8b51"
};


// Inizializziamo FireBase
const firebaseapp = initializeApp(firebaseConfig);


// Crea  una nuovo classe Provider 
const provider = new GoogleAuthProvider();

// Forza l'utente a selezionare un account Google durante il processo di autenticazione
provider.setCustomParameters({
    prompot: "select_account"
});

// Otteniamo autorizzazione
// Autenticazioni con Google
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);


// Inzializziamo il DB con getFireStore
export const db = getFirestore();

// 
export const addCollectionAndDocuments = async (collectionkey, objectsToAdd) => {
  const collectionRef = collection(db, collectionkey);
  const batch = writeBatch(db);

  // Object riferisce a ogni oggetto dell'array SHOP_DATA
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object); 
  })

  await batch.commit();
  console.log("done");
};

export  const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoriesMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})

  return categoriesMap;
}

/* Crea un documento utente, argomento l'autorizzazione.
 Doc accetta 3 argomenti, db, collection e l'ID
 come ID utilizziamo quello fornito da userAuth */

export const createUserDocumentFromAuth = async (userAuth, additionalInfos = {}) => {
  
  if (!userAuth) return;

  const userDocRef = doc(db, 'user', userAuth.uid);

  // Rappresenta tutti i dati dell'utente al momento
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInfos
      });
    } catch (error) {
      console.log("errore nel creare utente", error.message)
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);

}

// Auth tiene traccia anche se un utente è logatto o meno.
export const signOutUser = async () => await signOut(auth);

// Esegue callback ogni volta che l'utente logga o slogga
// Observer
export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};