import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount, shallow } from 'enzyme';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../Component/Home';

describe('<Home/>', () => {
  let home;

  beforeEach(() => {
    home = mount(
      <Router>
        <Home />
      </Router>
    );
  });

  test('Render el componente Home', () => {
    expect(home.length).toEqual(1);
  });

  // Render de Home usando library @testing-library/jest-dom/extend-expect';
  test('render de Home', () => {
    const home = render(
      <Router>
        <Home />
      </Router>
    );
    expect(home.container).toHaveTextContent('Login');
  });

  test('Render del titulo', () => {
    expect(home.find('.title-login').text()).toEqual('Login');
  });
});
