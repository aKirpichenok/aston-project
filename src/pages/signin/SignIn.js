import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { FormSign } from "../../components/FormSign"


const SignIn = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const fromPage = location.state?.from?.pathname || '/'

    useEffect(() => {
        if(!!localStorage.isActive) return navigate('/', {replace:true})
    })

    return (

        <div>
            <FormSign 
            type = 'Login'
            fromPage = {fromPage}
            />
        </div>
    )
}

export { SignIn }