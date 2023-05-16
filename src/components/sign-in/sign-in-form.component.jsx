import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { useDispatch } from 'react-redux';
import { googleSignInStart } from '../../store/user/user.action';
import { onEmailSignInStart } from '../../store/user/user.saga';
import './sign-in-form.styles.scss';
 
const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const dispatch = useDispatch();
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
    dispatch(googleSignInStart());
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(onEmailSignInStart(email, password));
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
           <Button type='submit' buttonType={BUTTON_TYPE_CLASSES.google}> Sign In </Button>
           <Button type='botton' buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={signInWithGoogle}> Google Sign In </Button>
         </div>
      </form>
    </div>
  )
}

export default SignInForm;
