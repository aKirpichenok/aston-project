const getUser = () => {
    try{
        if(localStorage.isActive !== '') {
            const users = JSON.parse(localStorage.users)
            const currentUser = localStorage.isActive
            return {
                user : {user: currentUser},
                favourites: {favourites: users[currentUser]['favourites']}
            }
    }
    }catch(e) {
        return undefined
    }
    }

export default getUser