import React from 'react'
import { useThemeContext } from '../contexts/ThemeContext'
import { useAuthContext } from '../contexts/AuthContext'

export const Navbar = () => {
    const { isLightTheme, light, dark } = useThemeContext()
    const { isAuthenticated, toAuthanticate } = useAuthContext()


    const theme = isLightTheme ? light : dark
    
    return (
        <nav style={{background: theme.ui, color: theme.syntax}}>
            <h1>Context App</h1>
            <div onClick={toAuthanticate}>
                {isAuthenticated ? "Logged In" : " Logged Out"}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}
