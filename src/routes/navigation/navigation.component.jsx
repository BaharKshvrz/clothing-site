import React, { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/huawei-logo.svg';
import './navigation.styles.scss';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import ShopIcon from '../../components/shop-icon/shop-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  }

  return (
    <Fragment>
      <div className='navigation'>
         <Link className="logo-container" to="/">
            <CrwnLogo className='logo'/>
         </Link>
         <div className="nav-links-container">
           <Link className='nav-link' to="/shop"> Shop </Link>
           {
            currentUser ? (<span className='nav-link' onClick={signOutHandler}>Sing Out</span>)
                        : (<Link className='nav-link' to="/auth">Sign In</Link>)
           }
          <ShopIcon/>
         </div>
         { isCartOpen && <CartDropdown/>}
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation;
