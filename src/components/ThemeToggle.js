import React from 'react'
import { useThemeContext } from '../contexts/ThemeContext'

export const ThemeToggle = () => {
    const { toggleTheme } = useThemeContext()
    return (
        <button onClick={toggleTheme}>Toggle the theme</button>
    )
}
