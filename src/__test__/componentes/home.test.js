import React from "react";
import {mount, shallow} from 'enzyme';
import render from 'react-test-renderer'
import Home from "../../Component/Home";



describe('<Home/>', ()=>{
  
  const home = mount(<Home/>);
  console.log(home.debug())
  test('Render el componente Home',()=>{
      expect(home.length).toEqual(1);
    });
  test('Render del titulo',()=>{
   const home=shallow(<Home/>)

    //console.log(home2.find('.title-login').text());
    expect(home.find('.title-login').text()).toEqual('Login');
  })  

});