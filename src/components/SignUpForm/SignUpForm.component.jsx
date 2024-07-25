import {  useState } from 'react';

import FormInput from '../FormInput/FormInput.component.jsx';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button.component.jsx';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils.js';

import { SignUpContainer } from './SignUpForm.styles.jsx';

/* Utilizziamo un oggetto per la gestione dello state così da poter scrivere il metodo handleChange in modo
    più generico */
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (password !== confirmPassword) {
          alert('passwords do not match');
          return;
        }
    
        try {
          const { user } = await createAuthUserWithEmailAndPassword(
            email,
            password
          );
    
          await createUserDocumentFromAuth(user, { displayName });
          resetFormFields();
        } catch (error) {
          if (error.code === 'auth/email-already-in-use') {
            alert('Cannot create user, email already in use');
          } else {
            console.log('user creation encountered an error', error);
          }
        }
    };

    // Target permettere di recuperare tutti i dettagli legati all'input
    // Settiamo lo state
    // Spread operator così da aggiungere la rispettiva proprietà e valore a formField
    const handleChange = (event) => {
        const { name, value } = event.target;
        // [name] perchè la prorietà è una stringa.
        setFormFields({...formFields, [name]: value});
    }


    return (
        <SignUpContainer>
            <h2>Non hai un account?</h2>
            <span>Registrati con la tua email e password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='Display Name' 
                    type='text' 
                    required 
                    onChange={handleChange} 
                    name='displayName' 
                    value={displayName} 
                />
                <FormInput 
                    label='Email' 
                    type='email' 
                    required 
                    onChange={handleChange} 
                    name='email' 
                    value={email} 
                />
                <FormInput 
                    label='Password' 
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name='password' 
                    value={password} 
                />
                <FormInput 
                    label='Confirm Password' 
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name='confirmPassword' 
                    value={confirmPassword} 
                />
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type='submit'>Invia</Button>
            </form>
        </SignUpContainer>
  )
}

export default SignUpForm;


  