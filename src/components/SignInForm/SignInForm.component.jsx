import { useState } from 'react';

import FormInput from '../FormInput/FormInput.component';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button.component';

import { SignInFormContainer, ButtonsContainer} from './SignInForm.styles';

import { 
    signInWithGooglePopup,
    signInAuthWithEmailAndPassword 
} from '../../utils/firebase/firebase.utils';


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
    <SignInFormContainer>
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
            <ButtonsContainer>
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type='submit'>Log In</Button>
                <Button buttonType={BUTTON_TYPE_CLASSES.google} type='button' onClick={signInWithGoogle}>Google Sign In</Button>
            </ButtonsContainer>
        </form>
    </SignInFormContainer>
  )
}

export default SignInForm;