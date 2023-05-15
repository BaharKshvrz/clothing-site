import styled from 'styled-components';

export const SppinerOverlay = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const SppinerContainer = styled.div`
   width: 50px;
   height: 50px;
   border-radius: 50%;
   border: 3px solid #ccc;
   border-top-color: #999;
   animation: spin 3s ease-in-out infinite;

   @keyframes spin {
     to {
        transform: rotate(360deg)
     }
   }
`