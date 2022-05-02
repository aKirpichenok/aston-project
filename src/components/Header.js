import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../store/userReducer'
import themeContext from '../store/authContext'
import { useContext } from 'react'


export const Header = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    const { theme, changeTheme } = useContext(themeContext)
    console.log(theme, changeTheme)


    return <header className={theme}>
        <div className='logo'>

        </div>
        <nav className='navigation'>

            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/history'>History</NavLink>
                </li>
                <li>
                    <NavLink to='/favourites'>Favourites</NavLink>
                </li>
                <li>
                    <NavLink to='/searching'>Searching</NavLink>
                </li>
                {!user && <li>
                    <NavLink to='/signin'>SignIn</NavLink>
                </li>}
                {!user && <li>
                    <NavLink to='/signup'>SignUp</NavLink>
                </li>}
                {user && <li>
                    <button onClick={() => dispatch(signout())}>LogOut</button>
                </li>}
                <li>
                    <button onClick={() => theme === 'dark' ? changeTheme('white') : changeTheme('dark')}>Change Theme</button>
                </li>
            </ul>

        </nav>
    </header>
}