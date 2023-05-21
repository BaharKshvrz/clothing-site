import { AnyAction } from "redux";
import { CartItem } from "./cart.types";
import { setCartItems, setIsCartOpen } from "./cart.action";

export type CARTSTATE = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};

export const CART_INITIAL_STATE: CARTSTATE = {
    isCartOpen: false,
    cartItems: [],
};

export const cartReducer = (state= CART_INITIAL_STATE, action:  AnyAction): CARTSTATE => {
   if (setIsCartOpen.match(action) ) {
          return { 
            ...state,
            isCartOpen: action.payload,
        };
   }

   if (setCartItems.match(action) ) {
     return { 
        ...state,
        cartItems: action.payload,
   };
   }

   return state;
  
    // switch( type ) {
    //   case CART_ACTION_TYPES.SET_IS_CART_OPEN:
    //       return { 
    //         ...state,
    //          isCartOpen: payload
    //         };

    //   case CART_ACTION_TYPES.SET_CART_ITEMS:
    //       return { 
    //        ...state,
    //        cartItems: payload
    //     };    

    //   default:
    //       return state;    
    // }
  }