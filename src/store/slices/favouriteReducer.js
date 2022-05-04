import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    favourites: {

    }
  }
  
  
  
  const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
      addFavouriteCharacter(state,action) {
          const { option, item } = action.payload
          if (state.favourites[option]) {
            state.favourites[option][item.char_id] ? delete state.favourites[option][item.char_id] : state.favourites[option][item.char_id] = item
          } else {
              state.favourites = {
                  ...state.favourites,
                  [option] : {
                      [item.char_id] :  item
                  }
                }
            }
          },
     addFavouriteDeath(state,action) {
        const { option, item } = action.payload
        if (state.favourites[option]) {
          state.favourites[option][item.death_id] ? delete state.favourites[option][item.death_id] : state.favourites[option][item.death_id] = item
        } else {
            state.favourites = {
                ...state.favourites,
                [option] : {
                    [item.death_id] :  item
                }
              }
          }

     },
     addFavouriteEpisode(state,action) {
        const { option, item } = action.payload
        if (state.favourites[option]) {
          state.favourites[option][item.episode_id] ? delete state.favourites[option][item.episode_id] : state.favourites[option][item.episode_id] = item
        } else {
            state.favourites = {
                ...state.favourites,
                [option] : {
                    [item.episode_id] :  item
                }
              }
          }
     },
     addFavouriteQUote(state,action) {
        const { option, item } = action.payload
        if (state.favourites[option]) {
          state.favourites[option][item.quote_id] ? delete state.favourites[option][item.quote_id] : state.favourites[option][item.quote_id] = item
        } else {
            state.favourites = {
                ...state.favourites,
                [option] : {
                    [item.quote_id] :  item
                }
              }
          }

     }
      }
    })

  
  export const { addFavouriteCharacter, addFavouriteDeath, addFavouriteEpisode, addFavouriteQUote } = favouritesSlice.actions
  
  export default favouritesSlice.reducer