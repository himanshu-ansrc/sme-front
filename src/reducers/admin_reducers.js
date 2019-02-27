import {ADMIN_TYPE} from '../actions/types.js'

export default (state=null, action)=>{
     switch(action.type){
         case ADMIN_TYPE:
	         return action.payload
         default:
              return state;
     }
}