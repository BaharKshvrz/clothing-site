import  styled  from "styled-components";
import { SpinnerContainer } from '../spinner/spinner.styles';

export const BaseButton = styled.button`
    font-size: 1.1rem;
    color: white;
    padding: 1rem;
    border: none;
    outline: none;
    min-width: 5rem;
    width: auto;
    height: 4rem;
    cursor: pointer;
    margin: 0 0.5rem;
`;

// "GoogleSignInButton" inherited from "BaseButton"
export const GoogleSignInButton = styled(BaseButton)`
    background-color: rgb(11, 99, 171);
    color: white;

    &:hover {
        background-color: white;
        border: none;
        color: black;
        border: 1px solid black;
    }
`;

export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: 1px solid black;
    }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;