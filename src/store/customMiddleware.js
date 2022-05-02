
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
                      return next({
                        type: 'user/signup',
                        payload: {
                        isError: true
                        }
                      })
                  }else {
                  const user1 = {[user] : {
                    password,
                    favourites: {
                      
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
        }
        case 'user/signout': {
        return next(action)
        }
        case 'setFetch': {
            if(localStorage.isActive === '' || action.payload.from === 'history'){
                return next(action)
            }else {
                const { input, option } = action.payload
                const user = localStorage.isActive
                const  users = JSON.parse(localStorage.users)
                const str = users[user].history
          str.push({
            input: input,
            option: option
          })
          localStorage.users = JSON.stringify(users,{[user] : {
            history : str
           }
          })
          return next(action)
            }
        }
        case 'favourites/addFavouriteCharacter': {
            if(localStorage.isActive !== ''){
                
                const user = localStorage.isActive
                const users = JSON.parse(localStorage.users)
                 const favourites = users[user].favourites
                 const { item } = action.payload
                //  let isAdded
                //  try {
                //     isAdded = favourites['characters'][item.char_id]
                //  }catch(e) {
                //      isAdded = null
                //  }
                 const isAdded = favourites['characters'][item.char_id] && null
                 isAdded ? delete favourites['characters'][item.char_id] : favourites['characters'] = {[item.char_id] : item}
                 localStorage.users = JSON.stringify(users,{[user] : {
                    favourites : favourites
                   }})
                   return next(action)
                }else alert('Maybe login?)')
                break;
        }
        case 'favourites/addFavouriteDeath': {
            if(localStorage.isActive !== ''){
                
                const user = localStorage.isActive
                const users = JSON.parse(localStorage.users)
                 const favourites = users[user].favourites
                 const { item } = action.payload
                 const isAdded = favourites['deaths'][item.death_id] && null
                 isAdded ? delete favourites['deaths'][item.death_id] : favourites['deaths'] = {[item.death_id] : item}
                 localStorage.users = JSON.stringify(users,{[user] : {
                    favourites : favourites
                   }})
                   return next(action)
                }else alert('Maybe login?)')
        break;
            }
            case 'favourites/addFavouriteEpisode': {
                if(localStorage.isActive !== ''){
                    
                    const user = localStorage.isActive
                    const users = JSON.parse(localStorage.users)
                     const favourites = users[user].favourites
                     const { item } = action.payload
                     const isAdded = favourites['episodes'][item.episode_id] && null
                     isAdded ? delete favourites['episodes'][item.episode_id] : favourites['episodes'] = {[item.episode_id] : item}
                     localStorage.users = JSON.stringify(users,{[user] : {
                        favourites : favourites
                       }})
                       return next(action)
                    }else alert('Maybe login?)')
            break;
                }
                case 'favourites/addFavouriteQuote': {
                    if(localStorage.isActive !== ''){
                        
                        const user = localStorage.isActive
                        const users = JSON.parse(localStorage.users)
                         const favourites = users[user].favourites
                         const { item } = action.payload
                         const isAdded = favourites['quotes'][item.quote_id] && null
                         isAdded ? delete favourites['quotes'][item.quote_id] : favourites['quotes'] = {[item.quote_id] : item}
                         localStorage.users = JSON.stringify(users,{[user] : {
                            favourites : favourites
                           }})
                           return next(action)
                        }else alert('Maybe login?)')
                break
                    }
        default: break;
    }
    next(action)
}