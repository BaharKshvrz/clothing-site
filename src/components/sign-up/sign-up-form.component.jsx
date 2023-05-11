import React, { useState } from 'react';
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  console.log('SignUpForm');
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields;

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name] : value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) return;
    
    try {
      await createAuthUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log('error', error);
    }
  }
  return (
    <div className='sign-up-container'>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          id="displayName" 
          name="displayName" 
          value={displayName} 
          onChange={handleChange}/>

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

        <FormInput 
          label="confirmPassword"
          type="password" 
          id="confirmPassword" 
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange} />

        <Button type='submit' buttonType='inverted'>Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm;
