import { useContext } from 'react';
import { ReactComponent as ShopingIcon} from '../../assets/shopping-bag-icon.svg';
import './shop-icon.styles.scss';
import { CartContext } from '../../contexts/cart.context';

const ShopIcon = () => {
  const { cartCount } = useContext(CartContext);
  const {isCartOpen, setIsCartOpen} = useContext(CartContext);
  const toggleCarOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <div className="cart-icon-container" onClick={toggleCarOpen}>
      <ShopingIcon className="shopping-icon"/>
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default ShopIcon
