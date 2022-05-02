import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { FormSign } from "../../components/FormSign"

const SignUp = () => {
    const navigate = useNavigate()


    useEffect(() => {
        if(!!localStorage.isActive) return navigate('/', {replace:true})
    },[navigate])

    return (
        <div>
            <FormSign 
            type = 'registration'
            fromPage={'/'}
            />
        </div>
    )
}

export { SignUp }