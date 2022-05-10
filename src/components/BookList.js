import React from 'react'

import { useThemeContext } from '../contexts/ThemeContext'

export const BookList = () => {
    const { isLightTheme, light, dark } = useThemeContext()


    const theme = isLightTheme ? light : dark
    return (
        <div className='book-list' style={{ color: theme.syntax, background: theme.bg }}>
            <ul>
                <li style={{background: theme.ui}}>First book</li>
                <li style={{background: theme.ui}}>Second book</li>
                <li style={{background: theme.ui}}>Third book</li>
            </ul>
        </div>
    )
}
