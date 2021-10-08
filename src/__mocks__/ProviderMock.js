import React, {useContext} from "react";



const mockValue = {
    error: null,
    currentUser: 'phony',
    signup: jest.fn(),
    login: jest.fn(),
    logout: jest.fn()
  }
  
  const MockAuthContext = () => (React.createContext(mockValue) )
  export const useAuth = () => useContext(MockAuthContext);
  export const ProviderMock = (props) => {
    return (
        <MockAuthContext.Provider value = {mockValue}>
            {props.children}
        </MockAuthContext.Provider>
    )
  }

  
