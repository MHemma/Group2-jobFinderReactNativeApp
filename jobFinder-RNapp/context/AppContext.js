import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [userId, setUserId] = useState (null);
    const [userIdInput, setUserIdInput] = useState(null);
    const [userPasswordInput, setUserPasswordInput] = useState(null);
    const [userLoggedin, setUserLoggedIn] = useState(false);
    const [loginError, setLoginError] = useState('');

    const context = {
        userId,
        setUserId,
        // userIdInput,
        // setUserIdInput,
        // userPasswordInput,
        // setUserPasswordInput,
        userLoggedin,
        setUserLoggedIn,
        loginError,
        setLoginError,
    };

    return (
        <AppContext.Provider value={context}>
          {children}
        </AppContext.Provider>
      )
}

export function AppContext() {
    return useContext(AppContext);
}