import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

// Helper Funcs
const addCartItem = (cartItems, productToAdd) => {
        const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

        if (existingCartItem) {
            return cartItems.map(cartItem => (
                cartItem.id === productToAdd.id 
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
                ));
        }
    
        return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (existingCartItem.quantity > 1) {
        return cartItems.map(cartItem => (
            cartItem.id === cartItemToRemove.id 
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
            ))
    }
    return cartItems.filter(item => item.id !== cartItemToRemove.id)
}

const clearCartItem = (cartItems, cartItemToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
}

// Actions
export const setIsCartOpen = (boolean) =>
 createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const clearItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = clearCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}