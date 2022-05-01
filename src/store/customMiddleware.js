
export const customMiddleware = store => next => action => {
    switch(action.type) {
        case 'user/signin' : {
            const {user,password}=action.payload
            if(localStorage.users){
                const users = JSON.parse(localStorage.users)
                if(users[user] && password === users[user].password){
                    return next(action)
            }else {
                let result = next({
                    type: 'user/signin',
                    payload: {
                      error: true,
                    },
                  });
                  alert('Invalid username or password')
                  return result;
            }
            }
        else {
            let result = next({
                type: 'user/signin',
                payload: {
                  error: true,
                },
              });
              alert('Invalid username or password')
              return result;
       
        
        }
        }
        case 'user/signup' : {

            const {user, password} = action.payload
            if(!localStorage.users) {
          
                const user1 = {[user] : {
                  password,
                  favourites: {
                    characters: [],
                    deaths: [],
                    episodes: [],
                    quotes: []
                  },
                  history:[]
                }}
                 localStorage.users = JSON.stringify({...user1})
                 return next({
                    type: 'user/signup',
                    payload: {
                        user
                    },
                })
                }else {
                  const users = JSON.parse(localStorage.users)
                  if(users[user]) {
                      alert('Email is already exist!')
                  }else {
                  const user1 = {[user] : {
                    password,
                    favourites: {
                      characters: [],
                      deaths: [],
                      episodes: [],
                      quotes: []
                    },
                    history: []
                  }}
                  localStorage.users= JSON.stringify({...users, ...user1
                })
                return next({
                    type: 'user/signup',
                    payload: {
                        user
                    },
                })
                }
            }
            break;
        }
        case 'user/signout': {
        return next(action)
        }
        default: break;
    }
}