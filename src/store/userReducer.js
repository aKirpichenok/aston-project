import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    user: null,
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
        const {user} = action.payload
        state.user=user
        localStorage.isActive = user
      },
      signout(state) {
        state.user=null
        localStorage.isActive = ''
      },
    },
  })
  
  export const { signin, signout, signup } = postsSlice.actions
  
  export default postsSlice.reducer
    