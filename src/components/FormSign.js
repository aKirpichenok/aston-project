import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import useValidate from "../hooks/useValidate"
import { signin, signup } from "../store/userReducer"



const FormSign = ({ type, fromPage }) => {

    const dispatch = useDispatch()
    const { validation } = useValidate()
    const navigate = useNavigate()

    const [valid,setValid] = useState({
        isUserValid: true,
        isPasswordValid: true
    })

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const user = form.username.value
        const password = form.password.value
        if(validation(user,'login') && validation(password,'password')){
        type === 'Login' ? dispatch(signin({user,password})) : dispatch(signup({user,password}))
        navigate(fromPage, {replace:true})
    }else{
        setValid({
            isUserValid: validation(user,'login'),
            isPasswordValid: validation(password, 'password')
        })
    }
    }

    return <>
    <h1>{type} Page</h1>
     <form onSubmit={handleSubmit}>
                <label>
                    Name: <input name="username" />
                </label>
                <label>
                    Password: <input name="password" />
                </label>
                <button type="submit">Login</button>
            </form>
            {!valid.isUserValid && <p>username is invalid</p>}
            {!valid.isPasswordValid && <p>password is invalid</p>}
            </>
}

export { FormSign }