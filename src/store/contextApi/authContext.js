import React, { useState } from "react"

const themeContext = React.createContext({
    theme: 'white',
    changeTheme: (theme) => { }
})

export const AuthProvider = (props) => {
    const [theme, setTheme] = useState('white')

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