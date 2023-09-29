import React, { createContext } from 'react'

export const MyContext = createContext(null)

const AuthProvider = ({ children }) => {

    const contextProperty = { value: '10' };

    return (
        //? Tower for context API
        <MyContext.Provider value={contextProperty}>
            {children}
        </MyContext.Provider>
    )
}

export default AuthProvider