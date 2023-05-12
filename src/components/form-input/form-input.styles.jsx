import styled, {css} from 'styled-components';

const subColor = 'gray';

///////////////////////////////////////////////////////////
// @mixin shrinkLable {
//     top: -25px;
//     color: $sub-color;
// }

// It changes to this one::
///////////////////////////////////////////////////////////

const shrinkLableStyles = css`
    top: -25px;
    color: ${subColor};
`;

export const Group = styled.div`
    margin-bottom: 2rem;
    position: relative;
`;

export const FormInputLabel = styled.label`
    font-size: 1.1rem;
    position: absolute;
    left: 0;
    top: 0;

    ${({shrink}) => shrink && shrinkLableStyles};
`;

export const Input = styled.input`
    width: 100%;
    height: 2rem;
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 3px;
    padding: 1rem;
    transition: all 0.2s;

    &:focus {
       outline: none;
    }

    &:focus ~ ${FormInputLabel} {
       ${shrinkLableStyles};
    }
`;