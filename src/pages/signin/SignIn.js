import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import useValidate from "../../hooks/useValidate"
import { signin } from "../../store/userReducer"

const SignIn = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const fromPage = location.state?.from?.pathname || '/'
    const { validation } = useValidate()

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const user = form.username.value
        const password = form.password.value
        if(validation(user,'login') && validation(password,'password')){
        dispatch(signin({user,password}))
        navigate(fromPage, {replace:true})
    }else{
        alert('Something is invalid')
    }
    }

    useEffect(() => {
        if(!!localStorage.isActive) return navigate('/', {replace:true})
    })

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input name="username" />
                </label>
                <label>
                    Password: <input name="password" />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export { SignIn }