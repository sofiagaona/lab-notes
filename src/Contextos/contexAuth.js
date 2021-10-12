import React, { useState, useEffect, useContext } from 'react';
import { auth } from '../Configuraciones/firebase';
import { getAuth,setPersistence,browserLocalPersistence, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = (props) => {

  const [ currentUser, setCurrentUser] = useState({});
    useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth,(user) => {
        setCurrentUser(user.uid);
      })
}, []);

    const signup = (email, password) => {
        const auth = getAuth();
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        const auth = getAuth();
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });
        //const auth = getAuth();
       //return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        const auth = getAuth();
        return signOut(auth)
        
    }
   

    const value = {currentUser, signup, login, logout};
    return (
        <AuthContext.Provider value = {value}>
            {props.children}
        </AuthContext.Provider>
    )

}