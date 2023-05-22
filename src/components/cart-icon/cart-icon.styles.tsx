import styled from 'styled-components';
import { ReactComponent as ShopingSvg} from '../../assets/shopping-bag-icon.svg';

export const CartIconContainer = styled.div`
    display: flex;
    justify-content: center;
    justify-items: center;
    position: relative;
    cursor: pointer;
`;

export const ItemCount = styled.span`
    position: absolute;
    font-weight: bold;
    font-size: 0.8rem;
    top: 0.7rem;
`;

export const ShopingIcon = styled(ShopingSvg)`
    width: 3rem;
    height: 2rem;
`;