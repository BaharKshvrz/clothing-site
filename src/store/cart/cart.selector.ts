import { createSelector } from "reselect";
import { CARTSTATE } from "./cart.reducer";
import { RootState } from "../store";

const selectCartReducer = (state: RootState): CARTSTATE => state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cartSlice) => cartSlice.cartItems
);

export const selectCartIsOpen = createSelector(
    [selectCartReducer],
    (cartSlice) => cartSlice.isCartOpen
)

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
)

export const selectCartTotal= createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)
)
