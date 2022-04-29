import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { signup } from "../../store/userReducer"
import { useEffect } from "react"

const SignUp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const user = form.username.value
        const password = form.password.value

        dispatch(signup({user,password}))
        navigate('/', {replace:true})
    }

    useEffect(() => {
        if(!!localStorage.isActive) return navigate('/', {replace:true})
    },[])

    return (
        <div>
            <h1>Registration Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input name="username" />
                </label>
                <label>
                    Password: <input name="password" />
                </label>
                <button type="submit">Registrate</button>
            </form>
        </div>
    )
}

export { SignUp }