// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

global.firebaseAuth = {
  getAuth: jest.fn(),
  onAuthStateChanged: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  signOut: jest.fn()
};

jest.mock('firebase/auth', () => global.firebaseAuth);

jest.mock('./contextos/contexAuth', () => ({
  useAuth() {
    return {
      signup(email, password) {
        return {
          createUserWithEmailAndPassword: jest.fn(() => Promise.resolve())
        };
      },
      login() {
        return {
          signInWithEmailAndPassword: jest.fn(() => Promise.resolve())
        };
      }
    };
  }
}));

configure({ adapter: new Adapter() });
