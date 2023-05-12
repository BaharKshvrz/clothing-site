import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CartIconContainer, ItemCount, ShopingIcon } from './cart-icon.styles';

const CartIcon = () => {
  const { cartCount } = useContext(CartContext);
  const {isCartOpen, setIsCartOpen} = useContext(CartContext);
  const toggleCarOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <CartIconContainer onClick={toggleCarOpen}>
      <ShopingIcon/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
