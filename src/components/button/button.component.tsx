import { FC, ButtonHTMLAttributes } from 'react';
import { BaseButton, ButtonSpinner, GoogleSignInButton, InvertedButton } from './button.styles';

export enum BUTTON_TYPE_CLASSES {
    base = 'base',
    google = 'google-sign-in',
    inverted = 'inverted',
}

const getButton = (buttonType= BUTTON_TYPE_CLASSES.base) => (
  {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>
//The HTMLButtonElement interface provides properties and methods 
//(beyond the regular HTMLElement interface it also has available to it by inheritance) 
//for manipulating <button> elements.

const Button: FC<ButtonProps> = ({children, buttonType, isLoading, ...otherProps}) => {
  const CustomButton = getButton(buttonType);
  return (
      <CustomButton disabled={isLoading} {...otherProps}> 
         {isLoading ? <ButtonSpinner/>: children}
      </CustomButton>
    );
}

export default Button;
