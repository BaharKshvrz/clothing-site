import { AnyAction } from "redux";
import { signInFailed, signInSuccess, signOutFailed, signOutSuccess, signUpFailed } from "./user.action";
import { UserData } from "../../utils/firebase/firebase.utils";

export type USERSTATE = {
    readonly currentUser: UserData | null,
    readonly isLoading: boolean,
    readonly error: Error | null,
}

const INITIAl_STATE: USERSTATE = {
   currentUser: null,
   isLoading: false,
   error: null,
}

export const userReducer = (state= INITIAl_STATE, action: AnyAction): USERSTATE => {
  if (signInSuccess.match(action)) {
     return {...state, currentUser: action.payload};
  }

  if (signOutSuccess.match(action)) {
    return {...state, currentUser: null};
  }

  if (signInFailed.match(action) || signUpFailed.match(action) || signOutFailed.match(action)) {
    return {...state, error: action.payload};
   }
 
    return state;

//    switch(type) {
//         case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
//             return {...state, currentUser: payload};
       
//         case USER_ACTION_TYPES.SIGN_OUT_SUCCESS: 
//             return {...state, currentUser: null};

//         case USER_ACTION_TYPES.SIGN_IN_FAILED:
//         case USER_ACTION_TYPES.SIGN_UP_FAILED: 
//         case USER_ACTION_TYPES.SIGN_OUT_FAILED:
//                 return {...state, error: payload};    
//         default:
//             return state;
//    }
};