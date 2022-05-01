import { NavLink, Outlet} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../store/userReducer'

export const Layout = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)

    return (
        <>
        <header className='header'>
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
                </ul>
            
            </nav>
            
            
        </header>

        <main className='container'>
        <Outlet />
        </main>

        <footer className='footer'>2022</footer>
        </>
    )
}

