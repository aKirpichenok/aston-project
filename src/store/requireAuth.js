import { useLocation, Navigate } from 'react-router-dom'


const RequireAuth = ({children}) => {
    const location = useLocation()
    const user = !!localStorage.isActive

    if(!user){
        return <Navigate to='/signin' state={{from:location}} />
    }
    
    return children
}

export {RequireAuth}