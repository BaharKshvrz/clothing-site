import { useState } from "react";
import { createContext } from "react";

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
  
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}