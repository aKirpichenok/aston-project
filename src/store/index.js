import { configureStore } from '@reduxjs/toolkit'
import { customMiddleware } from './customMiddleware'
import getUser from './getUser'
import userReducer from './slices/userReducer'
import favouriteReducer from './slices/favouriteReducer'
import { userAPI } from './userAPI'


export default configureStore({
  reducer: {
    user: userReducer,
    favourites: favouriteReducer,
    [userAPI.reducerPath]: userAPI.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware, userAPI.middleware),
  preloadedState: getUser()
})