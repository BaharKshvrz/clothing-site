import { ActionWithPayload, createAction, withMatcher } from "../../utils/reducer/reducer.utils";
import { CategoryItem } from "../categories/category.types";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";

// Helper Funcs
const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
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

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CategoryItem): CartItem[] => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (existingCartItem && existingCartItem.quantity > 1) {
        return cartItems.map(cartItem => (
            cartItem.id === cartItemToRemove.id 
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
            ))
    }
    return cartItems.filter(item => item.id !== cartItemToRemove.id)
}

const clearCartItem = (cartItems: CartItem[], cartItemToRemove: CategoryItem): CartItem[] => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
}

// Actions
export type SETISCARTOPEN = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;
export type SETCARTITEMS = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;

export const setIsCartOpen = withMatcher((boolean: boolean) : SETISCARTOPEN => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean));
export const setCartItems= withMatcher((cartItems: CartItem[]): SETCARTITEMS => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems));


export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem): SETCARTITEMS => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return setCartItems(newCartItems);
}

export const removeItemFromCart = (cartItems: CartItem[], cartItemToRemove: CartItem): SETCARTITEMS => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return setCartItems(newCartItems);
}

export const clearItemFromCart = (cartItems: CartItem[], cartItemToRemove: CartItem): SETCARTITEMS => {
    const newCartItems = clearCartItem(cartItems, cartItemToRemove);
    return setCartItems(newCartItems);
}