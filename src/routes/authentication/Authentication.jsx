import React from 'react';

import SignInForm from '../../components/SignInForm/SignInForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

import './Authentication.scss';

// Ogni chiamata al DB è asincrona
// otteniamo user chiamando signInWithGooglePopup
//  Creaiamo un documento per l'id dell'utente
const Authentication = () => {
    
  return (
    <div className='sign-in-page-div'>
        { /*<button onClick={logGoogleUser}>Sign in with Google Popup</button>*/ }
        <SignInForm />
        <SignUpForm />
    </div>
  )
}

export default Authentication;