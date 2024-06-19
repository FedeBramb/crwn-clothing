import React from 'react';

import { signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/SignUpForm/SignUpForm';

// Ogni chiamata al DB è asincrona
// otteniamo user chiamando signInWithGooglePopup
//  Creaiamo un documento per l'id dell'utente
const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }
  return (
    <div>
        <h1>SignIn page</h1>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        <SignUpForm />
    </div>
  )
}

export default SignIn;