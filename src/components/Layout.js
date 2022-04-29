import { NavLink, Outlet} from 'react-router-dom'

export const Layout = () => {

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
                  <li>
                    <NavLink to='/signin'>SignIn</NavLink>
                    </li>
                 <li>
                    <NavLink to='/signup'>SignUp</NavLink>
                    </li>
                    <li>
                    <button>LogOut</button>
                    </li>
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

