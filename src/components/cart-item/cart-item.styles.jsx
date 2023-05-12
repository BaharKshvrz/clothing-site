import styled from 'styled-components';

export const CartItemContainer = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 1rem;
    height: 7rem;

    img {
        width: 30%;
    }
`;

export const ItemDetails = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0.5rem;

    .name {
        font-size: 1.1rem;
    }
`;


