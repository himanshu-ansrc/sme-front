import { combineReducers } from 'redux'
import auth from './auth_reducers'
import {admin_type, admin_action} from './admin_reducers'

export default combineReducers({
      auth,
      admin: admin_type,
      admin_action
})
