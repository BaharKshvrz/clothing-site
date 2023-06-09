import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserDocumentForAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

//////////////////////////////////////
    // It becomes:
    // <UserProvider>
    //     <app/>
    // </UserProvider>
//////////////////////////////////////
export const UserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {currentUser, setCurrentUser};  

  useEffect(() => {
    const unsubscribe =  onAuthStateChangedListener( user => {
      if (user) {
        createUserDocumentForAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
  
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}