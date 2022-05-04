import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import useInput from "../../hooks/useInput"
import { signin, signup } from "../../store/slices/userReducer"
import PropTypes from 'prop-types'



const FormSign = ({ type, fromPage }) => {

    const email = useInput('', { isEmpty: true, minLength: 5 })
    const password = useInput('', { isEmpty: true, minLength: 5 })

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSubmit = e => {
        e.preventDefault()

        const isValidEmail = !email.minLength && !email.isEmpty ? true : false
        const isValidPassword = !password.minLength && !password.isEmpty ? true : false

        if (isValidEmail === true && isValidPassword === true) {
            type === 'Login' ? dispatch(signin({ user: email.value, password: password.value }))
                : dispatch(signup({ user: email.value, password: password.value }))

            if (localStorage.isActive !== '') navigate(fromPage, { replace: true })
        }
    }

    return <>
        <form onSubmit={handleSubmit} noValidate>
            <div className="segment">
                <h1>{type} Page</h1>
            </div>
            <label htmlFor='email'>Name:</label>
            {(email.dirty && email.minLength) && <p style={{ color: 'red' }}>Invalid login length</p>}
            {(email.dirty && email.isEmpty) && <p style={{ color: 'red' }}>Empty field</p>}
            <input
                onChange={e => email.onChange(e)}
                onBlur={e => email.onBlur(e)}
                value={email.value}
                type='email'
                placeholder="Email Adress"
                id='email'
                name='username'
                required
            />
            <label htmlFor='password'>Password:</label>
            {(password.dirty && password.minLength) && <p style={{ color: 'red' }}>Invalid password length</p>}
            {(password.dirty && password.isEmpty) && <p style={{ color: 'red' }}>Empty field</p>}
            <input
                onChange={e => password.onChange(e)}
                onBlur={e => password.onBlur(e)}
                value={password.value}
                type='password'
                placeholder="Password"
                id='password'
                name='password'
                required
            />
            <button disabled={!email.inputValid || !password.inputValid}
                type="submit"
                className="red"
            >
                <i className="icon ion-md-lock"></i>
                {type}</button>
        </form>
    </>
}

FormSign.propTypes = {
    type: PropTypes.oneOf(['Login', 'Registration']),
    fromPage: PropTypes.string
}

export { FormSign }