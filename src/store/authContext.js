import React, { useState } from "react"

const themeContext = React.createContext({
    theme: 'dark',
    changeTheme: (theme) => { }
})

export const AuthProvider = (props) => {
    const [theme, setTheme] = useState('dark')

    const changeTheme = theme => {
        setTheme(theme)
    }

    const contextTheme = {
        theme,
        changeTheme
    }

    return <themeContext.Provider value={contextTheme}>
        {props.children}
    </themeContext.Provider>
}

export default themeContext