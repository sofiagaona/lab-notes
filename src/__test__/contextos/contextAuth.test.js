import React from 'react';
import { mount } from 'enzyme';
import { AuthProvider, useAuth } from '../../Contextos/contexAuth.js';

jest.mock('../../Contextos/contexAuth', () => {
  const contextAuth = jest.requireActual('../../Contextos/contexAuth');

  return contextAuth;
});

describe('contextAuth', () => {
  let provider;
  const email = 'sofia@email.com';
  const password = '1234567890';

  // NOTE: use this component to access Context.Provider values
  const AnyComponent = ({ email, password }) => {
    const { signup, login, logout } = useAuth();

    return (
      <div>
        <button id="signup" onClick={() => signup(email, password)} />
        <button id="logout" onClick={() => logout()} />
        <button id="login" onClick={() => login()} />
      </div>
    );
  };

  beforeEach(() => {
    provider = mount(
      <AuthProvider>
        <AnyComponent email={email} password={password} />
      </AuthProvider>
    );
  });

  test('llamar al metodo createUserWithEmailAndPassword al ejecutar signup', () => {
    const signup = provider.find('#signup');
    signup.simulate('click');

    expect(
      global.firebaseAuth.createUserWithEmailAndPassword
    ).toHaveBeenCalledWith(undefined, email, password);
  });

  test('llamar al metodo signOut al ejecutar logout', () => {
    const logout = provider.find('#logout');
    logout.simulate('click');

    expect(global.firebaseAuth.signOut).toHaveBeenCalled();
  });

  test('llamar al metodo signInWithEmailAndPassword al ejecutar login', () => {
    const login = provider.find('#login');
    login.simulate('click');

    expect(global.firebaseAuth.signInWithEmailAndPassword).toHaveBeenCalled();
  });
});
