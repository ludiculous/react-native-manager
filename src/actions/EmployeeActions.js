import {EMPLOYEE_UPDATE,EMPLOYEE_CREATE,EMPLOYEE_FETCH,EMPLOYEE_SAVE,EMPLOYEE_FIRE} from './types.js';
import Firebase from 'firebase';
import {Actions} from 'react-native-router-flux'

export const employeeUpdate = ({prop,value}) => {
        return {
            type: EMPLOYEE_UPDATE,
            payload: {prop,value}
        }

};


export const employeeCreate = ({name,phone,shift}) => {
    const {currentUser} = Firebase.auth();

    return (dispatch)=>{
        Firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({name,phone,shift})
            .then(()=>{
                dispatch({
                    type:EMPLOYEE_CREATE,

                })
                Actions.employeeList()
            })
    }


}

export const employeesFetch = ()=>{
    const {currentUser} = Firebase.auth();
    //on value is watcher method that will grab a snapsho
    //anytime a new value is added to the db
    return (dispatch)=>{
        Firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value',snapshot=>{
                dispatch({
                    type:EMPLOYEE_FETCH,
                    payload:snapshot.val()
                })
            })

    };
}

export const employeeSave = ({name,phone,shift,key})=>{
    const {currentUser} = Firebase.auth();

    return (dispatch)=>{
        Firebase.database().ref(`/users/${currentUser.uid}/employees/${key}`)
            .set({name,phone,shift})
                .then(()=>{
                dispatch({
                    type:EMPLOYEE_SAVE
                })

            })
    }

}


export const employeeFire = ({key})=>{
    const {currentUser} = Firebase.auth();

    return (dispatch)=>{
        Firebase.database().ref(`/users/${currentUser.uid}/employees/${key}`)
        .remove()
            .then(()=>{
                Actions.employeeList({type:'reset'})
                dispatch({
                    type:EMPLOYEE_FIRE
                })
            })
    }

};
