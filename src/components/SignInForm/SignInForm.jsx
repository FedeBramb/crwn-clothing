import { useState } from 'react';

import FormInput from '../FormInput/FormInput';

import { signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth, createAuthSignInWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

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
            await createAuthSignInWithEmailAndPassword(email, password);
            
        } catch(error) {
            console.log("impossibile", error)
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }
    
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }

    
  return (
    <div className='sign-in-form-div'>
        <form onSubmit={handleSubmit}>
            <h2>Hai già un account?</h2>
            <span>Accedi con la tua email e password</span>
            <FormInput
                label='eMail'
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
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <button type='submit'>Log In</button>
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