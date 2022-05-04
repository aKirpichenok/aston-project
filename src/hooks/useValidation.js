import { useEffect, useState } from "react"

const useValidation = (value, validations) => {
    const [isEmpty, setIsEmpty] = useState(true)
    const [minLength, setMinLength] = useState(false)
    const [inputValid, setInputValid] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLength(true) : setMinLength(false)
                    break;
                case 'isEmpty':
                    value ? setIsEmpty(false) : setIsEmpty(true)
                    break;
                default:
                    break;
            }
        }


    }, [value])

    useEffect(() => {
        if (isEmpty || minLength) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }

    }, [isEmpty, minLength])

    return {
        isEmpty,
        minLength,
        inputValid
    }
}

export default useValidation