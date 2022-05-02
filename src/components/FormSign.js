import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import useValidate from "../hooks/useValidate"
import { signin, signup } from "../store/userReducer"
import PropTypes from 'prop-types'



const FormSign = ({ type, fromPage }) => {

    const dispatch = useDispatch()
    const { validation, isUserValid, isPasswordValid } = useValidate()
    const navigate = useNavigate()


    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const user = form.username.value
        const password = form.password.value
        if (validation(user, 'login') && validation(password, 'password')) {
            type === 'Login' ? dispatch(signin({ user, password })) : dispatch(signup({ user, password }))
            navigate(fromPage, { replace: true })
        }
    }

    return <>
        <h1>{type} Page</h1>
        <form onSubmit={handleSubmit} noValidate>
            <label htmlFor='email'>Name:</label>
            <input
                type='email'
                id='email'
                name='username'
                required
            />
            {!isUserValid && <p className="invalid">username is invalid</p>}
            <label htmlFor='password'>Password:</label>
            <input
                type='password'
                id='password'
                name='password'
                required
            />
            <button type="submit">Login</button>
        </form>

        {!isPasswordValid && <p className="invalid">password is invalid</p>}
    </>
}

FormSign.propTypes = {
    type: PropTypes.oneOf(['Login', 'registration']),
    fromPage: PropTypes.string
}

export { FormSign }