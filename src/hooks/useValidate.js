const useValidate = () => {
    const validation = (input,option) => {
        if(option === 'login') return input.trim().length > 5 && input.includes('@')
        if(option === 'password') return input.trim().length > 5

    }
    return { validation }
}

export default useValidate