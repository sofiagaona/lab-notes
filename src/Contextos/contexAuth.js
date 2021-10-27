import React, { useState, useEffect, useContext } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
// import { auth } from '../Configuraciones/firebase';
import GetStorageValue from '../Hook/GetStorageValue';

const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(
    GetStorageValue('currentUser', '')
  );

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user.uid);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }, [currentUser]);

  const signup = (email, password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    const auth = getAuth();
    return signOut(auth);
  };

  const value = { currentUser, signup, login, logout };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
