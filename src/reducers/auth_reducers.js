import {LOGIN_USER, AUTH_USER} from '../actions/types.js'

export default (state=null, action)=>{
     switch(action.type){
         case LOGIN_USER:
             console.log(action.payload)
	         return action.payload['token']
	     case AUTH_USER:
	         return action.payload!==null ? action.payload['token'] : null;
         default:
              return state;
     }
}