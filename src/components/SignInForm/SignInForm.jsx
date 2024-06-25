import { useState } from 'react';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

import { 
    signInWithGooglePopup, 
    signInWithGoogleRedirect, 
    createUserDocumentFromAuth, 
    signInAuthWithEmailAndPassword 
} from '../../utils/firebase/firebase.utils';

import './SignInForm.scss';

const defaultFormFields = {
    email: '',
    password: ''
}


const SignInForm = () => {
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const userCredential = await signInAuthWithEmailAndPassword(email, password);
            const user = userCredential.user;
            resetFormFields();
          } catch (error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('Password non corretta');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
            }
            console.log(error);
          }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }
    
    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
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
                required
                onChange={handleChange}
            />
            <FormInput 
                label='Password'
                type='password' 
                name='password' 
                value={password}
                required
                onChange={handleChange}
            />
            <div className='buttons-container'>
                <Button buttonType='inverted' type='submit'>Log In</Button>
                <Button buttonType='google' type='button' onClick={signInWithGoogle}>Google Sign In</Button>
            </div>
        </form>
    </div>
  )
}

export default SignInForm;