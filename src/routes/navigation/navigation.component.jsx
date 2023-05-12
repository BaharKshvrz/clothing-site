import React, { Fragment, useContext } from 'react'
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';
import { Logo, LogoContainer, NavLink, NavLinks, NavigationContainer } from './navigation.styles';

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);
  const signOutHandler = async () =>  await signOutUser();

  return (
    <Fragment>
      <NavigationContainer>
         <LogoContainer to="/">
            <Logo/>
         </LogoContainer>
         <NavLinks>
           <NavLink to="/shop"> Shop </NavLink>
           {
            currentUser ? (<NavLink as='span' onClick={signOutHandler}> Sing Out </NavLink>)
                        : (<NavLink to="/auth"> Sign In </NavLink>)
           }
          <CartIcon/>
         </NavLinks>
         { isCartOpen && <CartDropdown/>}
      </NavigationContainer>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation;
