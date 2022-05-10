import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()


export const AuthContextProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const toAuthanticate =  () => {
        setIsAuthenticated(!isAuthenticated)
    }

    return (
    <AuthContext.Provider value={{isAuthenticated, toAuthanticate}}>
        {children}
    </AuthContext.Provider>
  )
}


export const useAuthContext = () => {
    return useContext(AuthContext)
}