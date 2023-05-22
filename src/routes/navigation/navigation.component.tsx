import { Fragment, useContext } from 'react'
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { Logo, LogoContainer, NavLink, NavLinks, NavigationContainer } from './navigation.styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartIsOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';

const Navigation = () => {
  const dispatch = useDispatch();
  const {currentUser} = useContext(UserContext);
  const isCartOpen = useSelector(selectCartIsOpen);
  const signOutHandler = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContainer>
         <LogoContainer to="/">
            <Logo/>
         </LogoContainer>
         <NavLinks>
           <NavLink to="/shop"> Shop </NavLink>
           {
            currentUser ? (<NavLink to="/auth" as='span' onClick={signOutHandler}> Sing Out </NavLink>)
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
