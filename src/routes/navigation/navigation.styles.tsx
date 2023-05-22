import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/huawei-logo.svg';

export const NavigationContainer = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

export const LogoContainer = styled(Link)`
    display: flex;
    align-items: center;
    margin-left: 2rem;
`;

export const NavLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavLink = styled(Link)`
    margin-right: 0.6rem;
`;

// Stylign svg file
export const Logo = styled(CrwnLogo)`
    width: 3rem;
    height: 100%;
`;
