// Importa funzione per inizializzare la firebase App
// Importa metodi per ottenere l'autorizzazione, login con finestra redirect, login con pop up
// provider di Google, metodo per user e mail senza provider.

import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

// 1.Istanzia FireStore 2.riceve il doc nel DB 3.ottiene i dati 4.modifica i dati
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

// Crea  una nuovo classe  
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompot: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);


// Inzializziamo il DB con getFireStore
export const db = getFirestore();

/* Crea un documento utente, argomento l'autorizzazione.
 Doc accetta 3 argomenti, db, collection e l'ID
 come ID utilizziamo quello fornito da userAuth */

export const createUserDocumentFromAuth = async (userAuth, additionalInfos = {}) => {
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

export const createAuthWithEmailAndPassword = async (email, password) => {
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
// Open Listener, passivamente attivo
export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};