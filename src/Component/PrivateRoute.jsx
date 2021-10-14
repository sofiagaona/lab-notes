import React, {useState} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../Contextos/contexAuth';

//Autenticación

export const PrivateRoute = ({component:Component, ...rest}) => {
  const {user, currentUser } = useAuth();
  
  console.log(currentUser);
  console.log(Object.keys(currentUser).length);
  if (Object.keys(currentUser).length === 0){
   
    console.log('esta vacio'+ user);
  }
  //console.log(currentUser);

  return (
    <Route {...rest}>{Object.keys(currentUser).length !== 0 ? <Component /> : <Redirect to="/" />}</Route>
    );
  
}
export default PrivateRoute