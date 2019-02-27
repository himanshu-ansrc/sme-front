import { combineReducers } from 'redux'
import auth from './auth_reducers'
import admin from './admin_reducers'

export default combineReducers({
      auth,
      admin 
})