import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
        width: 90%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        grid-gap: 1rem;

        .title {
            grid-column: 1 / -1;
            margin: 2rem 0;
            font-size: 2rem;
            cursor: pointer;
        }
`;

