import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { mount } from "enzyme";
import FnSingUp from "../../Component/Singup";

jest.mock('../../Contextos/contexAuth', () => {
    return {
      useAuth: function() {
        return {
          signup: function(email, password){
            return {
                createUserWithEmailAndPassword : jest.fn(() => Promise.resolve())
            }
          }
        }
      }
    }
  });

  //funcion para simular las entradas a input
    const simulateChangeOnInput = (wrapper,inputSelector,newValue)=>{
        let input = wrapper.find(inputSelector);
        input.simulate('change', {target:{value:newValue},})
        return wrapper.find(inputSelector)
    }
  describe ('<FnSingUp/>', ()=>{

    test('Render del componente singup',()=>{
        const singup = render(<Router><FnSingUp/></Router>)
        expect(singup.container).toHaveTextContent('Registro');
    });
  
    test ('verificar entrada de nombre en input ',()=>{
        const singup= mount(<Router><FnSingUp/></Router>);
        const inputName= simulateChangeOnInput(singup,'input#input-name','Test');
        const inputEmail= simulateChangeOnInput(singup,'input#input-email','test@test.com');
        const inputPassword= simulateChangeOnInput(singup,'input#input-name','123456');
        const inputVerifPassword= simulateChangeOnInput(singup,'input#input-name','123456');
        
        expect(inputName.props().value).toEqual('Test');
        expect(inputEmail.props().value).toEqual('test@test.com');
        expect(inputPassword.props().value).toEqual('123456');
        expect(inputVerifPassword.props().value).toEqual('123456');
    })

    test('submit de form',()=>{
        const singup= mount(<Router><FnSingUp/></Router>);
        const inputName= simulateChangeOnInput(singup,'input#input-name','Test');
        const inputEmail= simulateChangeOnInput(singup,'input#input-email','test@test.com');
        const inputPassword= simulateChangeOnInput(singup,'input#input-name','123456');
        const inputVerifPassword= simulateChangeOnInput(singup,'input#input-name','123456');

        singup.find('form').simulate('submit', {preventDefault:()=>{},})
    })
  })