import { useState } from 'react';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

import { signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth, signInAuthWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

import './SignInForm.scss';

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFields = () => {
        useState(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const userCredential = await signInAuthWithEmailAndPassword(email, password);
            const user = userCredential.user;
            // Utente autenticato
            // Puoi qui eseguire altre operazioni con l'utente autenticato
            console.log('Utente autenticato:', user);
          } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            // Gestisci l'errore di autenticazione
            console.error('Errore di autenticazione:', errorMessage);
          }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }
    
    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }

    
  return (
    <div className='sign-in-form-div'>
        <form onSubmit={handleSubmit}>
            <h2>Hai già un account?</h2>
            <span>Accedi con la tua email e password</span>
            <FormInput
                label='Email'
                type='email' 
                name='email' 
                value={email} 
                onChange={handleChange}
            />
            <FormInput 
                label='Password'
                type='password' 
                name='password' 
                value={password} 
                onChange={handleChange}
            />
            <div className='buttons-container'>
                <Button buttonType='inverted' type='submit'>Log In</Button>
                <Button buttonType='google' onClick={signInWithGoogle}>Sign in with Google</Button>
            </div>
        </form>
    </div>
  )
}

export default SignInForm;

/* <label className='input-label-em'>eMail</label>
            <input className='input-email' type='email' name='email' value={email} onChange={handleChange} />
            <label className='input-label-psw'>Password</label>
            <input className='input-password' type='password' name='password' value={password} onChange={handleChange} />
 */