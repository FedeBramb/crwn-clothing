import React from 'react';

import SignInForm from '../../components/SignInForm/SignInForm.component';
import SignUpForm from '../../components/SignUpForm/SignUpForm.component';

import { AuthenticationContainer } from './Authentication.styles.jsx';

// Ogni chiamata al DB è asincrona
// otteniamo user chiamando signInWithGooglePopup
//  Creaiamo un documento per l'id dell'utente
const Authentication = () => {
    
  return (
    <AuthenticationContainer>
        { /*<button onClick={logGoogleUser}>Sign in with Google Popup</button>*/ }
        <SignInForm />
        <SignUpForm />
    </AuthenticationContainer>
  )
}

export default Authentication;