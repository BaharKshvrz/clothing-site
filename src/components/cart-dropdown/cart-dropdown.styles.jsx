import styled from 'styled-components';
import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles';

export const CartDropdownContainer = styled.div`
    width: 20rem;
    position: absolute;
    top: 3rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid #000;
    z-index: 999;
    padding: 2rem 0;

    // Referring to other components
    // if there is one of these components inside this CartDropdownContainer, use this css:
    ${BaseButton},
    ${GoogleSignInButton},
    ${InvertedButton} {
        margin-top: auto;
        margin-bottom: 0.5rem;
    }
`;

export const EmptyMessage= styled.span`
  font-size: 1.5rem;
`;

export const CartItems = styled.div`
    height: 20rem;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`;
