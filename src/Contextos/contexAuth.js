import React, { useState, useEffect, useContext } from 'react';
import { auth } from '../Configuraciones/firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getStorageValue } from '../Hook/useLocal Storage';

const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = (props) => {

  const [ currentUser, setCurrentUser] = useState(getStorageValue('currentUser',''));
  console.log(currentUser);
  //const [user, setUser]= useState({});
    useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth,(user) => {
        setCurrentUser(user.uid);
        
      })
      
}, []);
/*const auth = getAuth();
      onAuthStateChanged(auth,(user) => {
        setCurrentUser(user.uid);
        
      })*/

 /*window.localStorage.setItem(
     'currentUser', JSON.stringify(currentUser)
 )
 useEffect(()=>{
     const loggedCurrentUser=window.localStorage.getItem('currentUser')
     
         const user = JSON.parse(loggedCurrentUser)
         console.log(user);
         setCurrentUser(user);
         console.log(currentUser);
     
 },[])*/

 useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

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