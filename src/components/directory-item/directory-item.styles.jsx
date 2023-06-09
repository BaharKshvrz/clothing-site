import styled from 'styled-components';

export const BackgroundImage = styled.div`
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 100%;
        width: 100%;
        background-image: ${({imageUrl}) => `url(${imageUrl})`};
`;

export const Body = styled.div`
        position: absolute;
        height: 90px;
        border: 1px solid #000;
        padding: 1.2rem;
        background-color: white;
        opacity: 0.6;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h2 {
          font-size: 1.5rem;
          color: #414040;
        }

        p {
            font-size: 1.1rem;
            font-weight: 400;
            color: #a5a5a5;
          }
    }
`;

export const DirectoryItemContainer = styled.div`
    min-width: 30%;
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    flex: 1 1 auto;
    position: relative;
    margin: 1rem;
    overflow: hidden;

   &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.95) ;
    }

    $ ${Body} {
        opacity: 0.9;
    }
`;