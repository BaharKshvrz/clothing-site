import { useDispatch } from 'react-redux';
import './checkout-item.styles.scss';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.reducer';

const CheckoutItem = ({cartItem}) => {
  const {name, quantity, price, imageUrl} = cartItem;
  const dispatch = useDispatch();

  const addItemHandler = () => dispatch(addItemToCart(cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));

  return (
        <div className="checkout-item-container">
           <div className='image-container'>
              <img src={`${imageUrl}`} alt={name}/>
          </div>
          <span className='name'>{name}</span>
          <span className='quantity'>
             <div className='arrow' onClick={removeItemHandler}> &#10094; </div>
               <span className='value'>{quantity}</span>
              <div className='arrow' onClick={addItemHandler}> &#10095; </div>
          </span>
          <span className='price'>${price}</span>
          <span className='remove-button' onClick={clearItemHandler}> &#10005; </span>
        </div>  
  )
}

export default CheckoutItem
