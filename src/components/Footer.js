import { useContext } from "react"
import themeContext from "../store/contextApi/authContext"

export const Footer = () => {

    const { theme } = useContext(themeContext)
    return <footer className={theme}>
        <ul>
            <li>
                Andrey Kirpichenok
            </li>
            <li>
                <a href='https://github.com/aKirpichenok' target='_blank' rel="noreferrer">GitHub</a>
            </li>
        </ul>
    </footer >
}