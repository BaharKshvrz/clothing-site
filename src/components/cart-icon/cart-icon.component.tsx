import { CartIconContainer, ItemCount, ShopingIcon } from './cart-icon.styles';
import { selectCartCount, selectCartIsOpen } from '../../store/cart/cart.selector';
import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectCartIsOpen);

  const toggleCarOpen = () => dispatch(setIsCartOpen(!isCartOpen))

  return (
    <CartIconContainer onClick={toggleCarOpen}>
      <ShopingIcon/>
      <ItemCount> {cartCount} </ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
