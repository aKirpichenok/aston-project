import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { FormSign } from "../../components/forms/FormSign"


const SignIn = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const fromPage = location.state?.from?.pathname || '/'

    useEffect(() => {
        if (!!localStorage.isActive) return navigate('/', { replace: true })
    })

    return (

        <div className="sign">
            <FormSign
                type='Login'
                fromPage={fromPage}
            />
        </div>
    )
}

export { SignIn }