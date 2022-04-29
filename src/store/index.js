import { configureStore } from '@reduxjs/toolkit'
import { customMiddleware } from './customMiddleware'
import getUser from './getUser'
import userReducer from './userReducer'


export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [customMiddleware],
  preloadedState: getUser()
})