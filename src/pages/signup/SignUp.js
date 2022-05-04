import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { FormSign } from "../../components/forms/FormSign"

const SignUp = () => {
    const navigate = useNavigate()


    useEffect(() => {
        if (!!localStorage.isActive) return navigate('/', { replace: true })
    }, [navigate])

    return (
        <div className="sign">
            <FormSign
                type='Registration'
                fromPage={'/'}
            />
        </div>
    )
}

export { SignUp }