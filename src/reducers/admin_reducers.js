import {ADMIN_TYPE, ACTION_TYPE} from '../actions/types.js'

export const admin_type =  (state=null, action)=>{
     switch(action.type){
         case ADMIN_TYPE:
	         return action.payload
         default:
           return state;
     }
}

export const admin_action =  (state=null, action)=>{
     switch(action.type){
         case ACTION_TYPE:
           return action.payload
         default:
           return state;
     }
}
