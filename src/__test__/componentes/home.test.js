import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { mount, shallow } from 'enzyme';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from "../../Component/Home";

import {login} from "../../Contextos/contexAuth";








jest.mock('../../Contextos/contexAuth', () => {
  return {
    useAuth: function() {
      return {
        //login: jest.fn(() => Promise.resolve())
        login: function(){
          return {
            signInWithEmailAndPassword : jest.fn(() => Promise.resolve())
          }
        }
      }
    }
  }
});


describe('<Home/>', ()=>{
  let home;
  
  beforeEach(() => {
    home = mount(
      <Router>
        <Home/>
      </Router>
    );
  })

  test('Render el componente Home',()=>{
      expect(home.length).toEqual(1);
  });
  //Render de Home usando library @testing-library/jest-dom/extend-expect';
  test('render de Home',()=>{
    const home = render(<Router><Home/></Router>);
    expect(home.container).toHaveTextContent('Login');
  });
  // aun no me pasa simular el submit del formulario login
  test('click del botón comenzar',()=>{
    const mockFnLogin=jest.fn();
    const home = render(<Router><Home/></Router>);
    const formLogin = home.getByTestId('form-login');
    fireEvent.submit(formLogin);
    expect(mockFnLogin).toHaveBeenCalledTimes(1);
  });

  test('Render del titulo',()=>{
    expect(home.find('.title-login').text()).toEqual('Login');
  });

  test('deberia iniciar sesion', () => {
    const auth = jest.fn();
    const email = 'sofia@prueba.com';
    const password = '123456';
    const user = { email, uid: 'xxxxxxx' };

    
   
    });

  
});

