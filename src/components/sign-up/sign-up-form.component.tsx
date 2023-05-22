import React, { ChangeEvent, FormEvent, useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../store/user/user.action';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name] : value});
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) return;
    
    try {
      dispatch(signUpStart(email, password, displayName));

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

        <Button type='submit' buttonType={BUTTON_TYPE_CLASSES.inverted}> Sign Up </Button>
      </form>
    </div>
  )
}

export default SignUpForm;
