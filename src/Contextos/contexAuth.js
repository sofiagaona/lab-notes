import React, { useState, useEffect, useContext } from 'react';
import { auth } from '../Configuraciones/firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

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
        return signInWithEmailAndPassword(auth, email, password)
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