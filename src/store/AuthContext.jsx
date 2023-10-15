import React, { createContext, useState } from "react";

export const authContext = createContext({
    login: false,
    handleLogin: () => { }
})

export function AuthContext({ children }) {
    const [login, setLogin] = useState(false);
    function handleLogin() {
        setLogin(prevState => {
            prevState = !prevState;
        })
    }

    return (
        <authContext.Provider value={{login,handleLogin}}>
            {children}
        </authContext.Provider>
    )

}