import { useState } from "react"


const useValidate = () => {

    const [valid, setValid] = useState({
        isUserValid: true,
        isPasswordValid: true
    })
    const validation = (input, option) => {
        if (option === 'login') return setValid({
            isUserValid: input.trim().length > 5 && input.includes('@')
        })
        if (option === 'password') return setValid({
            isPasswordValid: input.trim().length > 5
        })
    }
    return {
        validation,
        isUserValid: valid.isUserValid,
        isPasswordValid: valid.isPasswordValid
    }
}

export default useValidate