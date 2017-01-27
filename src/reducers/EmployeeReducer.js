import {EMPLOYEE_FETCH} from '../actions/types.js'

const INITIAL_STATE = {

}


export default (state= INITIAL_STATE,action)=>{
    switch(action.type){
        case EMPLOYEE_FETCH:
            //use a key value pair
            //where the key is the id?
            return action.payload
            console.log(action.payload)
            return state;
        default:
            return state;
    }
};