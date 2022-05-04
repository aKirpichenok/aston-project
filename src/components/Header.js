import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../store/slices/userReducer'
import themeContext from '../store/contextApi/authContext'
import { useContext } from 'react'


export const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    const { theme, changeTheme } = useContext(themeContext)


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
                <li>
                    <div className='switch'>
                        <input
                            onClick={() => theme === 'dark' ? changeTheme('white') : changeTheme('dark')}
                            type="checkbox"
                            id="toggle" />
                        <label htmlFor="toggle"></label>
                    </div>
                </li>
                {user && <li className='logout'>
                    <button
                        onClick={() => {
                            dispatch(signout())
                            navigate('/')
                        }}
                        className="noselect">
                        <span className='text'>Log Out</span>
                        <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                            </svg>
                        </span>
                    </button>
                </li>}
            </ul>

        </nav>
    </header>
}