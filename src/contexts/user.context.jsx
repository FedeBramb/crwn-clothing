import { useState, useEffect, createContext } from 'react';

import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';

// Valore effettivo al quale vogliamo accedere
//  Inizializziamo il Context su null per evitare errori quando tentiamo di accedervi.
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

// Il provider è il componente che avvolge i componenti figli e permette la trasmissione di dati.
//  In questo caso rendiamo disponibile l'accesso al setter dello state currentUser
//   
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        })
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}