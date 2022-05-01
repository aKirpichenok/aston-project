import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    user: null,
    input: '',
    option: ''
  }
  
  
  
  const postsSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      signin(state, action) {
        if (action.payload.error) {
          state.user=null
        } else {
          const {user}=action.payload
          state.user= user
          localStorage.isActive = user
        }

      },
      signup(state,action) {
        const {user, isError} = action.payload
        if(!isError){
            state.user=user
            localStorage.isActive = user 
        }
      },
      signout(state) {
        state.user=null
        localStorage.isActive = ''
      },
      setFetch(state,action) {
          const { input, option } = action.payload
          state.input = input
          state.option = option
      }
    },
  })
  
  export const { signin, signout, signup, setFetch } = postsSlice.actions
  
  export default postsSlice.reducer
    