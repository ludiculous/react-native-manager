import React from 'react';
import {EMPLOYEE_UPDATE,EMPLOYEE_CREATE,EMPLOYEE_SAVE,EMPLOYEE_FIRE} from '../actions/types.js'

const INITIAL_STATE = {
    name:'',
    phone:'',
    shift:''
};

export default (state = INITIAL_STATE,action) => {
    switch(action.type){
        case EMPLOYEE_UPDATE:
            console.log(action.payload.prop)
            return {...state, [action.payload.prop]:action.payload.value}
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;
        case EMPLOYEE_SAVE:
            return INITIAL_STATE;
        case EMPLOYEE_FIRE:
            return INITIAL_STATE;
            ;
        default:
            return state;
    }
}