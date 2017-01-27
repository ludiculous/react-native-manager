import {EMAIL_CHANGED,PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL,LOGIN_USER} from '../actions/types.js';

const INITIAL_STATE = { email:'',
                        password:'',
                        loading:false,
                        error:'',
                        user:null
};


export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch(action.type){
        case EMAIL_CHANGED:
            console.log(action.payload);
            return{...state,email:action.payload};
        case PASSWORD_CHANGED:
            console.log(action.payload);
            return {...state, password:action.payload};
        case LOGIN_USER_SUCCESS:
            return {...state, ...INITIAL_STATE,user:action.payload};
        case LOGIN_USER_FAIL:
            return {...state, ...INITIAL_STATE,error:action.payload};
        case LOGIN_USER:
            return {...state,loading:true,error:''}

        default:
            return state;
    }

}