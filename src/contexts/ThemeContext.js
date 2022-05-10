import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [state, setState] = useState({
        isLightTheme: false,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
    })

    const toggleTheme = () => {
        setState(state => ({
            ...state,
            isLightTheme: !state.isLightTheme
        }))
    }

    return (
        <ThemeContext.Provider value={{ ...state, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useThemeContext = () => {
    return useContext(ThemeContext)
}