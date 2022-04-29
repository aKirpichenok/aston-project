const getUser = () => {
    try{
        if(localStorage.isActive !== '') {
            const currentUser = localStorage.isActive
            return {
                user : {user: currentUser}
            }
    }
    }catch(e) {
        return undefined
    }
    }

export default getUser