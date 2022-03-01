import { fireauth } from "../firebase/fireconfig";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [AuthIsReady, setAuthIsReady] = useState(false);

  useEffect(()=>{
    const unsub = fireauth.onAuthStateChanged((user)=>{
      setUser(user);
      // console.log(user);
      setAuthIsReady(true);
      unsub();
    })
  },[])

  return (
    <AuthContext.Provider value={{ user, setUser , AuthIsReady}}>
      {children}
    </AuthContext.Provider>
  );
};
