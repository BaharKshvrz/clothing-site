import React, { useContext, useState } from 'react';
import { UserContext } from '../../contexts/user.context';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in-form.styles.scss';
import { createUserDocumentForAuth,
         signInAuthUserWithEmailAndPassword,
         signInWithGooglePopup } from '../../utils/firebase/firebase.utils';


const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const {setCurrentUser} = useContext(UserContext);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name] : value});
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    setCurrentUser(user);
    await createUserDocumentForAuth(user);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthUserWithEmailAndPassword(email, password);
      setCurrentUser(user);
      resetFormFields();

    } catch (error) {
      console.log('error:', error.message);
    }
  }

  return (
    <div className='sign-in-container'>
      <h1>Sign in with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleChange} />

        <FormInput
          label="password"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}/>

         <div className="button-container">
           <Button type='submit' buttonType='inverted'>Sign In</Button>
           <Button type='botton' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
         </div>
      </form>
    </div>
  )
}

export default SignInForm;
